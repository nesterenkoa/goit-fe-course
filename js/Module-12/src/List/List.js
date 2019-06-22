export default class {
  constructor(container, records, callback) {
    this._container = container;
    this._callback = callback;
    this._container.addEventListener('click', this._handleClick.bind(this));
    this.show(records);
  }

  setCallback(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function!')
    }
    this._callback = callback;
  }

  show(records) {
    this._container.innerHTML = MyApp.templates.List({ records })
  }

  _handleClick(event) {
    const action = event.target.dataset.action;

    if (!action || typeof this._callback !== 'function') {
      return false;
    }
    event.preventDefault();

    this._callback(action, event.target.dataset.url)
  }

  destroy() {
    this._container.removeEventListener('click', this._handleClick);
    this._container.innerHTML = '';
  }
}
