'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = courseReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function courseReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_COURSE':
      state.push(action.course);
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.course)]);

    default:
      return state;
  }
};

//# sourceMappingURL=courseReducer-compiled.js.map