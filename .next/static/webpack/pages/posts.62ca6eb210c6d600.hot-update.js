"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/UserCardPosts.jsx":
/*!**************************************!*\
  !*** ./components/UserCardPosts.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_user_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/user-avatar.png */ \"./img/user-avatar.png\");\n/* harmony import */ var _UserPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPost */ \"./components/UserPost.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction UserCardPosts(_param) {\n    var _this = this;\n    var userPosts = _extends({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"userPostsContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"User ID\",\n                    userPosts[0].userId\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"userPostsContainer__posts\",\n                children: _toConsumableArray(Array(2)).map(function(post, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        props: userPosts[i]\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"userPostsContainer__link\",\n                to: \"/postsprofile/\".concat(userPosts[0].userId),\n                children: \"See all user posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = UserCardPosts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserCardPosts);\nvar _c;\n$RefreshReg$(_c, \"UserCardPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJDYXJkUG9zdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDZDtBQUVsQyxTQUFTRSxhQUFhLENBQUMsTUFBZ0IsRUFBRTs7UUFBYkMsU0FBUyxnQkFBZCxNQUFnQjtJQUNyQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0JBQW9COzswQkFDakMsOERBQUNDLElBQUU7O29CQUFDLFNBQU87b0JBQUNILFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksTUFBTTs7Ozs7O29CQUFNOzBCQUNyQyw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjswQkFDdkMsbUJBQUlHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBUkEsQ0FBVUMsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQzt5Q0FDekIsOERBQUNWLGlEQUFRO3dCQUFTVyxLQUFLLEVBQUVULFNBQVMsQ0FBQ1EsQ0FBQyxDQUFDO3VCQUF0QkEsQ0FBQzs7Ozs2QkFBeUI7aUJBQzFDLENBQUM7Ozs7O29CQUNFOzBCQUNOLDhEQUFDRSxHQUFDO2dCQUFDUixTQUFTLEVBQUMsMEJBQTBCO2dCQUFDUyxFQUFFLEVBQUUsZ0JBQWUsQ0FBc0IsT0FBcEJYLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksTUFBTSxDQUFFOzBCQUFFLG9CQUVwRjs7Ozs7b0JBQUk7Ozs7OztZQUNBLENBQ047Q0FDSDtBQWRRTCxLQUFBQSxhQUFhO0FBZ0J0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckNhcmRQb3N0cy5qc3g/Y2FhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckF2YXRhciBmcm9tICcuLi9pbWcvdXNlci1hdmF0YXIucG5nJztcclxuaW1wb3J0IFVzZXJQb3N0IGZyb20gJy4vVXNlclBvc3QnO1xyXG5cclxuZnVuY3Rpb24gVXNlckNhcmRQb3N0cyh7IC4uLnVzZXJQb3N0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBvc3RzQ29udGFpbmVyXCI+XHJcbiAgICAgIDxoMj5Vc2VyIElEe3VzZXJQb3N0c1swXS51c2VySWR9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyUG9zdHNDb250YWluZXJfX3Bvc3RzXCI+XHJcbiAgICAgICAge1suLi5BcnJheSgyKV0ubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8VXNlclBvc3Qga2V5PXtpfSBwcm9wcz17dXNlclBvc3RzW2ldfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwidXNlclBvc3RzQ29udGFpbmVyX19saW5rXCIgdG89e2AvcG9zdHNwcm9maWxlLyR7dXNlclBvc3RzWzBdLnVzZXJJZH1gfT5cclxuICAgICAgICBTZWUgYWxsIHVzZXIgcG9zdHNcclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmRQb3N0cztcclxuIl0sIm5hbWVzIjpbIlVzZXJBdmF0YXIiLCJVc2VyUG9zdCIsIlVzZXJDYXJkUG9zdHMiLCJ1c2VyUG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInVzZXJJZCIsIkFycmF5IiwibWFwIiwicG9zdCIsImkiLCJwcm9wcyIsImEiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserCardPosts.jsx\n");

/***/ })

});