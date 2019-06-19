const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const filters = [
  {
    title: 'Screen size',
    parameter: 'size',
    values: ['13', '15', '17']
  },
  {
    title: 'Color',
    parameter: 'color',
    values: ['white', 'gray', 'black']
  },
  {
    title: 'Release date',
    parameter: 'release_date',
    values: ['2015', '2016', '2017']
  }
];

class Form {
  constructor(container, filtersSet, callback) {
    this._container = container;
    this._filters = filtersSet;
    this._callback = callback;
    this.build();
  }

  build() {
    this._container.innerHTML = '';
    this._form = document.createElement('form');
    this._form.classList.add('form');
    this._filters.forEach(filter => {
      const section = document.createElement('section');

      const heading = document.createElement('h2')
      heading.classList.add('heading');
      heading.innerHTML = filter.title;
      section.appendChild(heading);

      const list = document.createElement('ul');
      list.classList.add('form-list');
      filter.values.forEach(value => {
        const item = document.createElement('li');
        item.innerHTML = `<label><input type="checkbox" name="${filter.parameter}" value="${value}">${value}</label>`;
        list.appendChild(item);
      });
      section.appendChild(list);

      this._form.appendChild(section);
    });
    this._container.appendChild(this._form);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn','submitBtn');
    submitBtn.setAttribute('data-action', 'submit');
    submitBtn.innerHTML = 'Submit';
    this._form.appendChild(submitBtn);

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('btn','resetBtn');
    resetBtn.setAttribute('data-action', 'reset');
    resetBtn.innerHTML = 'Reset';

    this._form.appendChild(resetBtn);
    this._form.addEventListener('click', this._handleFormAction)
  }

  _handleFormAction = (event) => {
    const action = event.target.dataset.action;

    if (!action) {
      return false;
    }
    event.preventDefault();

    switch (action) {
      case 'submit':
        this._submitForm();
        break;
      case 'reset':
        this._resetForm();
        break;
    }
  };

  _submitForm() {
    const formData = new FormData(this._form);
    const activeFilters = {};
    this._filters.forEach(filter => {
      const selectedValues = formData.getAll(filter.parameter);
      if (selectedValues.length) {
        activeFilters[filter.parameter] = selectedValues;
      }
    });
    this._callback(activeFilters);
  }

  _resetForm() {
    this._form.removeEventListener('click', this._handleFormAction);
    this.build();
    this._callback();
  }
}

class List {
  constructor(container, data) {
    this._container = container;
    this._data = data;
    this.render(data);
  }

  filter = (activeFilters) => {
    let filteredItems = this._data;
    if (activeFilters) {
      filteredItems = this._data.filter(item => {
        let fitsRequirements = true;
        for (let key in activeFilters) {
          if (!activeFilters[key].includes(`${item[key]}`)) {
            fitsRequirements = false;
            break;
          }
        }
        return fitsRequirements;
      })
    }
    this.render(filteredItems)
  };

  render(items) {
    this._container.innerHTML = '';
    const list = document.createElement('ul');
    list.classList.add('list');
    items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<p>${item.name}</p><img src="${item.img}"/><p>${item.descr}</p><p>${item.color}</p><p>${item.price}</p><p>${item.release_date}</p>`;
      list.appendChild(li);
    });
    this._container.appendChild(list);
  }
}

const list = new List(document.querySelector('#items'), laptops);
const form = new Form(document.querySelector('#filters'), filters, list.filter);
