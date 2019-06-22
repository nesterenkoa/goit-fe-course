export default class {
  constructor(container, callback) {
    this._container = container;
    this._callback = callback;
    this.init();
  }

  init() {
    this._container.innerHTML = MyApp.templates.Form();
    const form = this._container.querySelector('form');
    form.onsubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form);
      if (typeof this._callback === 'function') {
        this._callback(data);
      }
    }
  }

  setCallback(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function!')
    }
    this._callback = callback;
  }

  clean() {
    const inputs = this._container.querySelectorAll('input:not([type=submit])');
    inputs.forEach(input => input.value = '');
  }

  destroy() {
    this._container.innerHTML = '';
  }
}
