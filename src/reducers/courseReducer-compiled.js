'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = courseReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function courseReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}

//# sourceMappingURL=courseReducer-compiled.js.map