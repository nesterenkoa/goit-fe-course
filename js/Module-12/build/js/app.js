(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _List = _interopRequireDefault(require("./List/List"));

var _Form = _interopRequireDefault(require("./Form/Form"));

var _Controller = _interopRequireDefault(require("./Controller"));

var _Model = _interopRequireDefault(require("./Model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var form = new _Form["default"](document.querySelector('#form'));
  var list = new _List["default"](document.querySelector('#list'));
  var model = new _Model["default"]();
  var app = new _Controller["default"](model, form, list);
};

},{"./Controller":2,"./Form/Form":3,"./List/List":4,"./Model":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(model, form, list) {
    _classCallCheck(this, _default);

    this._model = model;
    this._form = form;
    this._list = list;

    this._form.setCallback(this._handleFormSubmit.bind(this));

    this._list.setCallback(this._handleListAction.bind(this));

    this.fetchBookmarks();
  }

  _createClass(_default, [{
    key: "_handleFormSubmit",
    value: function _handleFormSubmit(data) {
      var _this = this;

      var url = data.get('url');

      this._model.addBookmark(url)["catch"](function (err) {
        return alert(err);
      })["finally"](function () {
        return _this.fetchBookmarks();
      });
    }
  }, {
    key: "_handleListAction",
    value: function _handleListAction(action, url) {
      var _this2 = this;

      switch (action) {
        case 'delete':
          this._model.removeBookmark(url).then(function () {
            return _this2.fetchBookmarks();
          });

          break;
      }
    }
  }, {
    key: "fetchBookmarks",
    value: function fetchBookmarks() {
      var _this3 = this;

      this._model.listBookmarks().then(function (bookmarks) {
        return _this3._list.show(bookmarks);
      })["catch"](function (err) {
        return alert('Failed to fetch bookmarks');
      });
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(container, callback) {
    _classCallCheck(this, _default);

    this._container = container;
    this._callback = callback;
    this.init();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      this._container.innerHTML = MyApp.templates.Form();

      var form = this._container.querySelector('form');

      form.onsubmit = function (event) {
        event.preventDefault();
        var data = new FormData(form);

        if (typeof _this._callback === 'function') {
          _this._callback(data);
        }
      };
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function!');
      }

      this._callback = callback;
    }
  }, {
    key: "clean",
    value: function clean() {
      var inputs = this._container.querySelectorAll('input:not([type=submit])');

      inputs.forEach(function (input) {
        return input.value = '';
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._container.innerHTML = '';
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(container, records, callback) {
    _classCallCheck(this, _default);

    this._container = container;
    this._callback = callback;

    this._container.addEventListener('click', this._handleClick.bind(this));

    this.show(records);
  }

  _createClass(_default, [{
    key: "setCallback",
    value: function setCallback(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function!');
      }

      this._callback = callback;
    }
  }, {
    key: "show",
    value: function show(records) {
      this._container.innerHTML = MyApp.templates.List({
        records: records
      });
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      var action = event.target.dataset.action;

      if (!action || typeof this._callback !== 'function') {
        return false;
      }

      event.preventDefault();

      this._callback(action, event.target.dataset.url);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._container.removeEventListener('click', this._handleClick);

      this._container.innerHTML = '';
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
var token = '5d0bc84ec629867245236ce5a981076ce7feffc35c893';

function request(method, url, body) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return;
      }

      var response = JSON.parse(request.response);

      if (response.error) {
        reject(response.description);
      } else {
        resolve(response);
      }
    };

    request.send(JSON.stringify(body));
  });
}

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "addBookmark",
    value: function addBookmark(url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (!url) {
          reject('No url specified!');
          return false;
        }

        if (!url.match(regexp)) {
          reject('Invalid url');
          return false;
        }

        Promise.all([_this.listBookmarks.call(_this), request('GET', "https://api.linkpreview.net/?key=".concat(token, "&q=").concat(url))["catch"](function (err) {
          console.log(err);
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              bookmarks = _ref2[0],
              metaInfo = _ref2[1];

          var list = bookmarks || [];
          var alreadyExists = !!list.find(function (bookmark) {
            return bookmark.url === url;
          });

          if (alreadyExists) {
            reject('Already exists');
            return;
          }

          list.unshift(_objectSpread({}, metaInfo, {
            url: url
          }));
          localStorage.setItem('bookmarks', JSON.stringify(_toConsumableArray(list)));
          resolve(_toConsumableArray(list));
        });
      });
    }
  }, {
    key: "listBookmarks",
    value: function listBookmarks() {
      return new Promise(function (resolve, reject) {
        var bookmarks = localStorage.getItem('bookmarks');

        if (bookmarks) {
          resolve(JSON.parse(bookmarks));
        }

        resolve(null);
      });
    }
  }, {
    key: "setBookmarks",
    value: function setBookmarks(bookmarks) {
      return new Promise(function (resolve) {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        resolve(bookmarks);
      });
    }
  }, {
    key: "removeBookmark",
    value: function removeBookmark(link) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.listBookmarks().then(function (bookmarks) {
          if (bookmarks) {
            var updated = bookmarks.filter(function (bookmark) {
              return bookmark.url !== link;
            });

            _this2.setBookmarks(updated);

            resolve(updated);
            return;
          }

          reject('No bookmarks found');
        });
      });
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{}]},{},[1])


//# sourceMappingURL=app.js.map
