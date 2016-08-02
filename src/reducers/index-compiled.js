'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _courseReducer = require('./courseReducer');

var _courseReducer2 = _interopRequireDefault(_courseReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  courses: _courseReducer2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map