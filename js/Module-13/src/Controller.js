export default class {
  constructor(model, form, list) {
    this._model = model;
    this._form = form;
    this._list = list;

    this._form.setCallback(this._handleFormSubmit.bind(this));
    this._list.setCallback(this._handleListAction.bind(this));
    this.fetchBookmarks();
  }

  _handleFormSubmit(data) {
    const url = data.get('url');
    this._model.addBookmark(url)
      .catch(err => alert(err))
      .finally(() => this.fetchBookmarks());
  }

  _handleListAction(action, url) {
    switch (action) {
      case 'delete':
        this._model.removeBookmark(url)
          .then(() => this.fetchBookmarks());
        break;
    }
  }

  fetchBookmarks() {
    this._model.listBookmarks()
      .then(bookmarks => this._list.show(bookmarks))
      .catch(err => alert('Failed to fetch bookmarks'))
  }
}
