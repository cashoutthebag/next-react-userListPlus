"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./redux/actions/users.js":
/*!********************************!*\
  !*** ./redux/actions/users.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": function() { return /* binding */ fetchUsers; },\n/* harmony export */   \"setUsers\": function() { return /* binding */ setUsers; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar fetchUsers = function(sortBy, searchByName) {\n    return function(dispatch) {\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://jsonplaceholder.typicode.com/users?_sort=\".concat(sortBy)).then(function(param) {\n                var data = param.data;\n                dispatch(setUsers(data));\n            });\n        } catch (error) {\n            console.log(error.response.data);\n        }\n    };\n};\nfunction setUsers(items) {\n    return {\n        type: \"SET_USERS\",\n        payload: items\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUMsVUFBVSxHQUFHLFNBQUNDLE1BQU0sRUFBRUMsWUFBWTtXQUFLLFNBQUNDLFFBQVEsRUFBSztRQUNoRSxJQUFJO1lBQ0ZKLGdEQUFTLENBQUMsbURBQWtELENBQVMsT0FBUEUsTUFBTSxDQUFFLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGdCQUFjO29CQUFYQyxJQUFJLFNBQUpBLElBQUk7Z0JBQ2xGSCxRQUFRLENBQUNJLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxQixDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9FLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLENBQUNMLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7Q0FBQSxDQUFDO0FBRUssU0FBU0MsUUFBUSxDQUFDSyxLQUFLLEVBQUU7SUFDOUIsT0FBTztRQUFFQyxJQUFJLEVBQUUsV0FBVztRQUFFQyxPQUFPLEVBQUVGLEtBQUs7S0FBRSxDQUFDO0NBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2FjdGlvbnMvdXNlcnMuanM/M2NlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoc29ydEJ5LCBzZWFyY2hCeU5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycz9fc29ydD0ke3NvcnRCeX1gKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRVc2VycyhkYXRhKSk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJzKGl0ZW1zKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogJ1NFVF9VU0VSUycsIHBheWxvYWQ6IGl0ZW1zIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hVc2VycyIsInNvcnRCeSIsInNlYXJjaEJ5TmFtZSIsImRpc3BhdGNoIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJzZXRVc2VycyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaXRlbXMiLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/users.js\n");

/***/ })

});