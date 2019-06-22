const regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
const token = '5d0bc84ec629867245236ce5a981076ce7feffc35c893';

function request(method, url, body) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return
      }
      const response = JSON.parse(request.response);
      if (response.error) {
        reject(response.description)
      } else {
        resolve(response);
      }
    };

    request.send(JSON.stringify(body));
  })
}

export default class {
  addBookmark(url) {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject('No url specified!');
        return false;
      }
      if (!url.match(regexp)) {
        reject('Invalid url');
        return false;
      }
      Promise.all([
        this.listBookmarks.call(this),
        request('GET', `https://api.linkpreview.net/?key=${token}&q=${url}`).catch((err) => { console.log(err)})
      ]).then(([bookmarks, metaInfo]) => {
        const list = bookmarks || [];
        const alreadyExists = !!list.find(bookmark => bookmark.url === url);
        if (alreadyExists) {
          reject('Already exists');
          return;
        }
        list.unshift({ ...metaInfo, url });
        localStorage.setItem('bookmarks', JSON.stringify([...list]));
        resolve([...list]);
      });
    })
  }

  listBookmarks() {
    return new Promise((resolve, reject) => {
      const bookmarks = localStorage.getItem('bookmarks');
      if (bookmarks) {
        resolve(JSON.parse(bookmarks));
      }

      resolve(null);
    })
  }

  setBookmarks(bookmarks) {
    return new Promise(resolve => {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      resolve(bookmarks);
    })
  }

  removeBookmark(link) {
    return new Promise((resolve, reject) => {
      this.listBookmarks().then(bookmarks => {
        if (bookmarks) {
          const updated = bookmarks.filter(bookmark => bookmark.url !== link);
          this.setBookmarks(updated);
          resolve(updated);
          return;
        }
        reject('No bookmarks found')
      });
    });
  }
}
