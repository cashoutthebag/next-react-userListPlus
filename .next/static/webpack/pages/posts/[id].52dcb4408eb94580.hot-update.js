"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UserPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UserPost */ \"./components/UserPost.jsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction PostsProfile(param) {\n    var postsByUser = param.postsByUser, id = param.id;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(router);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postProfile\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"All posts by User ID\",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"postProfile__postsContainer\",\n                children: postsByUser.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        props: post\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostsProfile;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsProfile);\nvar _c;\n$RefreshReg$(_c, \"PostsProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBRVM7O0FBRWpELFNBQVNFLFlBQVksQ0FBQyxLQUFtQixFQUFFO1FBQW5CQyxXQUFXLEdBQWIsS0FBbUIsQ0FBakJBLFdBQVcsRUFBRUMsRUFBRSxHQUFqQixLQUFtQixDQUFKQSxFQUFFOzs7SUFDckMsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBRTFCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7SUFDcEIscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7OzBCQUMxQiw4REFBQ0MsSUFBRTs7b0JBQUMsc0JBQW9CO29CQUFDTixFQUFFOzs7Ozs7b0JBQU07MEJBQ2pDLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzBCQUN6Q04sV0FBVyxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDcEIsOERBQUNYLDREQUFRO3dCQUFlWSxLQUFLLEVBQUVELElBQUk7dUJBQXBCQSxJQUFJLENBQUNSLEVBQUU7Ozs7NkJBQWlCO2lCQUN4QyxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBZFFGLFlBQVk7O1FBQ0pGLGtEQUFTOzs7QUFEakJFLEtBQUFBLFlBQVk7O0FBZ0JyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgVXNlclBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyUG9zdCc7XHJcblxyXG5mdW5jdGlvbiBQb3N0c1Byb2ZpbGUoeyBwb3N0c0J5VXNlciwgaWQgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RQcm9maWxlXCI+XHJcbiAgICAgIDxoMj5BbGwgcG9zdHMgYnkgVXNlciBJRHtpZH08L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RQcm9maWxlX19wb3N0c0NvbnRhaW5lclwiPlxyXG4gICAgICAgIHtwb3N0c0J5VXNlci5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxVc2VyUG9zdCBrZXk9e3Bvc3QuaWR9IHByb3BzPXtwb3N0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzUHJvZmlsZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyBpZCB9IH0pIHtcclxuICBjb25zdCBwb3N0c0J5VXNlciA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP3VzZXJJZD0ke2lkfWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHNCeVVzZXIsIGlkIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVXNlclBvc3QiLCJQb3N0c1Byb2ZpbGUiLCJwb3N0c0J5VXNlciIsImlkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicG9zdCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

});