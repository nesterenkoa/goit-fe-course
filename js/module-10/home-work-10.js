class AdminPanel {
  constructor(container, url) {
    this._container = container;
    this._api = new API(url);
    this._addCreateUserForm();
    this._addUsersList();
    this._fetchUsers();
  }
  
  _addCreateUserForm() {
    this._form = document.createElement('form');
    this._form.setAttribute('action', '#');
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'name');
    nameInput.setAttribute('required', 'true');
    this._form.appendChild(nameInput);
    
    const ageInput = document.createElement('input');
    ageInput.setAttribute('placeholder', 'age');
    ageInput.setAttribute('required', 'true');
    this._form.appendChild(ageInput);
    
    const submit = document.createElement('button');
    submit.innerHTML = 'Create';
    submit.addEventListener('click', () => {
      if (!nameInput.value || !ageInput.value) {
        return false;
      }
      this._api.addUser(nameInput.value, ageInput.value)
        .then(() => {
          this._fetchUsers();
          nameInput.value = '';
          ageInput.value = '';
        });
    });
    this._form.appendChild(submit);
    
    this._container.appendChild(this._form);
  }
  
  _addUsersList() {
    this._list = document.createElement('ul');
    this._list.addEventListener('click', e => {
      switch (e.target.dataset.action) {
        case 'edit':
          this._enableEditMode(e.target.dataset.id);
          break;
        case 'cancel':
          this._disableEditMode(e.target.dataset.id);
          break;
        case 'delete':
          this._api.removeUser(e.target.dataset.id);
          this._fetchUsers();
          break;
      }
    });
    this._container.appendChild(this._list);
  }
  
  _fetchUsers() {
    if (!this._list) {
      this._addUsersList();
    }

    this._api.getAllUsers().then(users => {
      this._list.innerHTML = '';
      users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name}, age: ${user.age} `;
        li.setAttribute('data-id', user.id);

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.setAttribute('data-action', 'edit');
        editBtn.setAttribute('data-id', user.id);
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.setAttribute('data-action', 'delete');
        deleteBtn.setAttribute('data-id', user.id);
        li.appendChild(deleteBtn);
        
        this._list.appendChild(li);
      });
    })
  }
  
  _enableEditMode(id) {
    const listItems = this._container.querySelectorAll('li[data-id]');
    listItems.forEach(item => {
      const id = item.getAttribute('data-id');
      this._disableEditMode(id);
    });

    const li = this._container.querySelector(`li[data-id="${id}"]`);
    li.classList.add('editable');
    this._addEditForm(li, id);
    const editBtn = li.querySelector('button[data-action="edit"]');
    editBtn.innerHTML = 'Cancel';
    editBtn.setAttribute('data-action', 'cancel');
  }
  
  _disableEditMode(id) {
    const li = this._container.querySelector(`li[data-id="${id}"]`);
    li.classList.remove('editable');
    const form = li.querySelector('form');
    if (!form) {
      return false;
    }
    li.removeChild(form);
    const cancelBtn = li.querySelector('button[data-action="cancel"]');
    cancelBtn.innerHTML = 'Edit';
    cancelBtn.setAttribute('data-action', 'edit');
  }
  
  _addEditForm(parent, id) {
    this._api.getUserById(id).then( user => {
      const form = document.createElement('form');
      form.classList.add('edit-form');
      form.setAttribute('action', '#');
      
      const nameInput = document.createElement('input');
      nameInput.value = user.name;
      nameInput.setAttribute('required', 'true');
      form.appendChild(nameInput);
      
      const ageInput = document.createElement('input');
      ageInput.value = user.age;
      ageInput.setAttribute('required', 'true');
      form.appendChild(ageInput);
      
      const submitBtn = document.createElement('button');
      submitBtn.innerHTML = 'Submit';
      submitBtn.addEventListener('click', () => {
        if (!nameInput.value || !ageInput.value) {
          return false;
        }
        this._api.updateUser(id, { name: nameInput.value, age: ageInput.value })
          .then(() => this._fetchUsers());
      });
      form.appendChild(submitBtn);
  
      parent.append(form);
    })
  }
}

class API {
  constructor(host) {
    this._host = host;
  }
  
  _request(method, url, body) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, `${this._host}/${url}`);
      request.setRequestHeader('Accept', 'application/json');
      request.setRequestHeader('Content-Type', 'application/json');
      request.onreadystatechange = () => {
        if (request.readyState !== 4) {
          return
        }
        
        const response = JSON.parse(request.response);
        if (response.errors.length) {
          reject(response.errors)
        } else {
          resolve(response.data);
        }
      };

      request.send(JSON.stringify(body));
    })
  }
  
  getAllUsers() {
    return this._request('GET', 'users/')
  };
  
  getUserById(id) {
    return this._request('GET', `users/${id}`)
  };
  
  addUser(name, age) {
    return this._request('POST','users/', { name: name, age: age })
  };
  
  updateUser(id, user) {
    return this._request('PUT', `users/${id}`, user)
  };
  
  removeUser(id) {
    return this._request('DELETE', `users/${id}`)
  };
}

const panel = new AdminPanel(document.querySelector('.container'), 'https://test-users-api.herokuapp.com');
