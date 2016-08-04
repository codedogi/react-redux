'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.loadCourses = loadCourses;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _mockCourseApi = require('../api/mockCourseApi');

var _mockCourseApi2 = _interopRequireDefault(_mockCourseApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

function loadCourses() {
  return function (dispatch) {
    return _mockCourseApi2.default.getAllCourses().then(function (courses) {
      dispatch(loadCoursesSuccess(courses));
    }).catch(function (error) {
      throw error;
    });
  };
}

//# sourceMappingURL=courseActions-compiled.js.map