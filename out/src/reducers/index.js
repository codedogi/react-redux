'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _courseReducer = require('./courseReducer');

var _courseReducer2 = _interopRequireDefault(_courseReducer);

var _authorReducer = require('./authorReducer');

var _authorReducer2 = _interopRequireDefault(_authorReducer);

var _ajaxStatusReducer = require('./ajaxStatusReducer');

var _ajaxStatusReducer2 = _interopRequireDefault(_ajaxStatusReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  courses: _courseReducer2.default,
  authors: _authorReducer2.default,
  ajaxCallsInProgress: _ajaxStatusReducer2.default
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map