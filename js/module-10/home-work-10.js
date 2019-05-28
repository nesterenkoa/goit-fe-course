class AdminPanel {
  constructor(container, url) {
    this._container = container;
    this._api = new API(url);
    this._users = {};
    this._addCreateUserForm();
    this._addUsersList();
    this.fetchUsers();
  }
  
  _addCreateUserForm() {
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'name');
    nameInput.setAttribute('required', 'true');
    form.appendChild(nameInput);
    
    const ageInput = document.createElement('input');
    ageInput.setAttribute('placeholder', 'age');
    ageInput.setAttribute('required', 'true');
    form.appendChild(ageInput);
    
    const submit = document.createElement('button');
    submit.innerHTML = 'Create';
    submit.addEventListener('click', () => {
      if (!nameInput.value || !ageInput.value) {
        return false;
      }
      this._api.addUser(nameInput.value, ageInput.value)
        .then(() => {
          this.fetchUsers();
          nameInput.value = '';
          ageInput.value = '';
        });
    });
    form.appendChild(submit);
    
    this._container.appendChild(form);
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
          this._api.removeUser(e.target.dataset.id)
            .then(() => this.fetchUsers());
          break;
      }
    });
    this._container.appendChild(this._list);
  }
  
  fetchUsers = () => {
    if (!this._list) {
      this._addUsersList();
    }

    this._users = {};
    this._api.getAllUsers().then(users => {
      this._list.innerHTML = '';
      users.forEach(user => {
        const userNode = {};
        userNode.li = document.createElement('li');
        
        userNode.span = document.createElement('span');
        userNode.span.classList.add('user-info');
        userNode.span.innerHTML = `${user.name}, age: ${user.age} `;
        userNode.li.appendChild(userNode.span);

        userNode.editBtn = document.createElement('button');
        userNode.editBtn.innerHTML = 'Edit';
        userNode.editBtn.classList.add('btn', 'btn-edit');
        userNode.editBtn.setAttribute('data-action', 'edit');
        userNode.editBtn.setAttribute('data-id', user.id);
        userNode.li.appendChild(userNode.editBtn);
  
        userNode.cancelBtn = document.createElement('button');
        userNode.cancelBtn.innerHTML = 'Cancel';
        userNode.cancelBtn.classList.add('btn', 'btn-cancel');
        userNode.cancelBtn.setAttribute('data-action', 'cancel');
        userNode.cancelBtn.setAttribute('hidden', 'true');
        userNode.cancelBtn.setAttribute('data-id', user.id);
        userNode.li.appendChild(userNode.cancelBtn);

        userNode.deleteBtn = document.createElement('button');
        userNode.deleteBtn.innerHTML = 'Delete';
        userNode.deleteBtn.classList.add('btn', 'btn-delete');
        userNode.deleteBtn.setAttribute('data-action', 'delete');
        userNode.deleteBtn.setAttribute('data-id', user.id);
        userNode.li.appendChild(userNode.deleteBtn);
        
        this._list.appendChild(userNode.li);
        this._users[user.id] = userNode;
      });
    })
  };
  
  _enableEditMode(id) {
    const userIds = Object.keys(this._users);
    userIds.forEach(id => this._disableEditMode(id));

    const li = this._users[id].li;
    li.classList.add('editable');
    this._addEditForm(id);
    this._users[id].editBtn.setAttribute('hidden', 'true');
    this._users[id].cancelBtn.removeAttribute('hidden');
  }
  
  _disableEditMode(id) {
    const li = this._users[id].li;
    li.classList.remove('editable');
    const form = this._users[id].form;
    if (!form) {
      return false;
    }
    li.removeChild(form);
    this._users[id].form = null;
    this._users[id].editBtn.removeAttribute('hidden');
    this._users[id].cancelBtn.setAttribute('hidden', 'true');
  }
  
  _addEditForm(id) {
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
      submitBtn.innerHTML = 'Save';
      submitBtn.addEventListener('click', () => {
        if (!nameInput.value || !ageInput.value) {
          return false;
        }
        this._api.updateUser(id, { name: nameInput.value, age: ageInput.value })
          .then(() => this.fetchUsers());
      });
      form.appendChild(submitBtn);
  
      this._users[id].form = form;
      this._users[id].li.insertBefore(this._users[id].form, this._users[id].span);
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
// setInterval(panel.fetchUsers, 5000);
