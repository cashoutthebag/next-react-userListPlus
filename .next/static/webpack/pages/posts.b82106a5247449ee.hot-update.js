/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./img/user-avatar.png":
/*!*****************************!*\
  !*** ./img/user-avatar.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/user-avatar.74a62dd0.png\",\"height\":1200,\"width\":1200,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-avatar.74a62dd0.png&w=8&q=70\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWcvdXNlci1hdmF0YXIucG5nLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxDQUFDLCtLQUErSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9pbWcvdXNlci1hdmF0YXIucG5nPzczYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL3VzZXItYXZhdGFyLjc0YTYyZGQwLnBuZ1wiLFwiaGVpZ2h0XCI6MTIwMCxcIndpZHRoXCI6MTIwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGbWVkaWElMkZ1c2VyLWF2YXRhci43NGE2MmRkMC5wbmcmdz04JnE9NzBcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./img/user-avatar.png\n");

/***/ }),

/***/ "./components/UserCardPosts.jsx":
/*!**************************************!*\
  !*** ./components/UserCardPosts.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_user_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/user-avatar.png */ \"./img/user-avatar.png\");\n/* harmony import */ var _UserPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPost */ \"./components/UserPost.jsx\");\n/* harmony import */ var _UserPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserPost__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction UserCardPosts(_param) {\n    var _this = this;\n    var userPosts = _extends({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"userPostsContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"userPostsContainer__info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _img_user_avatar_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                        alt: \"user-avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"User ID\",\n                            userPosts[0].userId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"userPostsContainer__posts\",\n                children: _toConsumableArray(Array(2)).map(function(post, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_UserPost__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        props: userPosts[i]\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"userPostsContainer__link\",\n                to: \"/postsprofile/\".concat(userPosts[0].userId),\n                children: \"See all user posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\components\\\\UserCardPosts.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = UserCardPosts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserCardPosts);\nvar _c;\n$RefreshReg$(_c, \"UserCardPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJDYXJkUG9zdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2Q7QUFFbEMsU0FBU0UsYUFBYSxDQUFDLE1BQWdCLEVBQUU7O1FBQWJDLFNBQVMsZ0JBQWQsTUFBZ0I7SUFDckMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7MEJBQ2pDLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMEJBQTBCOztrQ0FDdkMsOERBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRVAsNERBQVU7d0JBQUVRLEdBQUcsRUFBQyxhQUFhOzs7Ozs0QkFBRztrQ0FDMUMsOERBQUNDLElBQUU7OzRCQUFDLFNBQU87NEJBQUNOLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sTUFBTTs7Ozs7OzRCQUFNOzs7Ozs7b0JBQ2pDOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzBCQUN2QyxtQkFBSU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFSQSxDQUFVQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDO3lDQUN6Qiw4REFBQ2Isa0RBQVE7d0JBQVNjLEtBQUssRUFBRVosU0FBUyxDQUFDVyxDQUFDLENBQUM7dUJBQXRCQSxDQUFDOzs7OzZCQUF5QjtpQkFDMUMsQ0FBQzs7Ozs7b0JBQ0U7MEJBQ04sOERBQUNFLEdBQUM7Z0JBQUNYLFNBQVMsRUFBQywwQkFBMEI7Z0JBQUNZLEVBQUUsRUFBRSxnQkFBZSxDQUFzQixPQUFwQmQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxNQUFNLENBQUU7MEJBQUUsb0JBRXBGOzs7OztvQkFBSTs7Ozs7O1lBQ0EsQ0FDTjtDQUNIO0FBakJRUixLQUFBQSxhQUFhO0FBbUJ0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckNhcmRQb3N0cy5qc3g/Y2FhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckF2YXRhciBmcm9tICcuLi9pbWcvdXNlci1hdmF0YXIucG5nJztcclxuaW1wb3J0IFVzZXJQb3N0IGZyb20gJy4vVXNlclBvc3QnO1xyXG5cclxuZnVuY3Rpb24gVXNlckNhcmRQb3N0cyh7IC4uLnVzZXJQb3N0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBvc3RzQ29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBvc3RzQ29udGFpbmVyX19pbmZvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e1VzZXJBdmF0YXJ9IGFsdD1cInVzZXItYXZhdGFyXCIgLz5cclxuICAgICAgICA8aDI+VXNlciBJRHt1c2VyUG9zdHNbMF0udXNlcklkfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJQb3N0c0NvbnRhaW5lcl9fcG9zdHNcIj5cclxuICAgICAgICB7Wy4uLkFycmF5KDIpXS5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgIDxVc2VyUG9zdCBrZXk9e2l9IHByb3BzPXt1c2VyUG9zdHNbaV19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJ1c2VyUG9zdHNDb250YWluZXJfX2xpbmtcIiB0bz17YC9wb3N0c3Byb2ZpbGUvJHt1c2VyUG9zdHNbMF0udXNlcklkfWB9PlxyXG4gICAgICAgIFNlZSBhbGwgdXNlciBwb3N0c1xyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZFBvc3RzO1xyXG4iXSwibmFtZXMiOlsiVXNlckF2YXRhciIsIlVzZXJQb3N0IiwiVXNlckNhcmRQb3N0cyIsInVzZXJQb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwidXNlcklkIiwiQXJyYXkiLCJtYXAiLCJwb3N0IiwiaSIsInByb3BzIiwiYSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserCardPosts.jsx\n");

/***/ }),

/***/ "./components/UserPost.jsx":
/*!*********************************!*\
  !*** ./components/UserPost.jsx ***!
  \*********************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _components_UserCardPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserCardPosts */ \"./components/UserCardPosts.jsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Posts = function(param) {\n    var postsData = param.postsData, page = param.page;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(postsData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"postsContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"paginationContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/posts?page=\".concat(page - 1));\n                            },\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/posts?page=\".concat(page + 1));\n                            },\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cardUsersContainer\",\n                    children: postsData.map(function(userPosts, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserCardPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, userPosts), userPosts[0].id, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Posts, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Posts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFHbUI7QUFDQTs7QUFFM0QsSUFBTUksS0FBSyxHQUFHLGdCQUF5QjtRQUF0QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7O0lBQzlCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQk8sT0FBTyxDQUFDQyxHQUFHLENBQUNKLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLHFCQUNFLDhEQUFDSCxpRUFBYTtrQkFDWiw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzs4QkFDN0IsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNsQyw4REFBQ0MsUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQyxjQUFhLENBQVcsT0FBVFIsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDOzZCQUFBO3NDQUFFLFVBQVE7Ozs7O2lDQUFTO3NDQUNoRiw4REFBQ00sUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQyxjQUFhLENBQVcsT0FBVFIsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDOzZCQUFBO3NDQUFFLE1BQUk7Ozs7O2lDQUFTOzs7Ozs7eUJBQ3hFOzhCQUNOLDhEQUFDSSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhCQUNoQ04sU0FBUyxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsU0FBUyxFQUFFQyxDQUFDOzZDQUMxQiw4REFBQ2QsaUVBQWEsb0JBQTJCYSxTQUFTLEdBQTlCQSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNFLEVBQUU7Ozs7a0NBQW1CO3FCQUN2RCxDQUFDOzs7Ozt5QkFDRTs7Ozs7O2lCQUNGOzs7OzthQUNRLENBQ2hCO0NBQ0g7R0FuQktkLEtBQUs7O1FBQ01ILGtEQUFTOzs7QUFEcEJHLEtBQUFBLEtBQUs7O0FBcUJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanM/M2IxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgVXNlckNhcmRQb3N0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJDYXJkUG9zdHMnO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoeyBwb3N0c0RhdGEsIHBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0c0RhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c0NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3RzP3BhZ2U9JHtwYWdlIC0gMX1gKX0+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb3N0cz9wYWdlPSR7cGFnZSArIDF9YCl9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRVc2Vyc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3Bvc3RzRGF0YS5tYXAoKHVzZXJQb3N0cywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8VXNlckNhcmRQb3N0cyBrZXk9e3VzZXJQb3N0c1swXS5pZH0gey4uLnVzZXJQb3N0c30gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHsgcGFnZSA9IDEgfSB9KSB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP19saW1pdD0yMCZfcGFnZT0ke3BhZ2V9YCxcclxuICApO1xyXG5cclxuICBjb25zdCBzcGxpdFBvc3RzVG9Vc2VycyA9IChhcnIpID0+IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgbGV0IGxhc3QgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcnJbaV0/LnVzZXJJZCAhPT0gYXJyW2kgLSAxXT8udXNlcklkKSB7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goYXJyLnNsaWNlKGxhc3QsIGkpKTtcclxuICAgICAgICBsYXN0ID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3N0c0RhdGEgPSBzcGxpdFBvc3RzVG9Vc2Vycyhwb3N0cy5kYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHNEYXRhLCBwYWdlOiArcGFnZSB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJNYWluQ29udGFpbmVyIiwiVXNlckNhcmRQb3N0cyIsIlBvc3RzIiwicG9zdHNEYXRhIiwicGFnZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsIm1hcCIsInVzZXJQb3N0cyIsImkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

/***/ })

});