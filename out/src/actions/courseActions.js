'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.createCourseSuccess = createCourseSuccess;
exports.updateCourseSuccess = updateCourseSuccess;
exports.loadCourses = loadCourses;
exports.saveCourse = saveCourse;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _mockCourseApi = require('../api/mockCourseApi');

var _mockCourseApi2 = _interopRequireDefault(_mockCourseApi);

var _ajaxStatusActions = require('./ajaxStatusActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course: course };
}

function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course: course };
}

function loadCourses() {
  return function (dispatch) {
    dispatch((0, _ajaxStatusActions.beginAjaxCall)());
    return _mockCourseApi2.default.getAllCourses().then(function (courses) {
      dispatch(loadCoursesSuccess(courses));
    }).catch(function (error) {
      throw error;
    });
  };
}

function saveCourse(course) {
  return function (dispatch) {
    dispatch((0, _ajaxStatusActions.beginAjaxCall)());
    return _mockCourseApi2.default.saveCourse(course).then(function (savedCourse) {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(function (error) {
      dispatch((0, _ajaxStatusActions.ajaxCallError)(error));
      throw error;
    });
  };
}
//# sourceMappingURL=courseActions.js.map