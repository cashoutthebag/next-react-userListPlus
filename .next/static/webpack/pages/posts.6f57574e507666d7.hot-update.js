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

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _components_UserCardPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserCardPosts */ \"./components/UserCardPosts.jsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Posts = function(param) {\n    var postsData = param.postsData, page = param.page;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(postsData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"postsContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"paginationContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/posts?page=\".concat(page - 1));\n                            },\n                            disabled: page <= 1,\n                            children: \"< Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/posts?page=\".concat(page + 1));\n                            },\n                            disabled: page < 1,\n                            children: \"Next >\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cardUsersContainer\",\n                    children: postsData.map(function(userPosts, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserCardPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, userPosts), userPosts[0].id, false, {\n                            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Posts, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Posts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFHbUI7QUFDQTs7QUFFM0QsSUFBTUksS0FBSyxHQUFHLGdCQUF5QjtRQUF0QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7O0lBQzlCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQk8sT0FBTyxDQUFDQyxHQUFHLENBQUNKLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLHFCQUNFLDhEQUFDSCxpRUFBYTtrQkFDWiw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzs4QkFDN0IsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNsQyw4REFBQ0MsUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQyxjQUFhLENBQVcsT0FBVFIsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDOzZCQUFBOzRCQUFFUyxRQUFRLEVBQUVULElBQUksSUFBSSxDQUFDO3NDQUMvRSxZQUFZOzs7OztpQ0FDTjtzQ0FDVCw4REFBQ00sUUFBTTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNTixNQUFNLENBQUNPLElBQUksQ0FBQyxjQUFhLENBQVcsT0FBVFIsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDOzZCQUFBOzRCQUFFUyxRQUFRLEVBQUVULElBQUksR0FBRyxDQUFDO3NDQUM5RSxRQUFROzs7OztpQ0FDRjs7Ozs7O3lCQUNMOzhCQUNOLDhEQUFDSSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhCQUNoQ04sU0FBUyxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsU0FBUyxFQUFFQyxDQUFDOzZDQUMxQiw4REFBQ2YsaUVBQWEsb0JBQTJCYyxTQUFTLEdBQTlCQSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNFLEVBQUU7Ozs7a0NBQW1CO3FCQUN2RCxDQUFDOzs7Ozt5QkFDRTs7Ozs7O2lCQUNGOzs7OzthQUNRLENBQ2hCO0NBQ0g7R0F2QktmLEtBQUs7O1FBQ01ILGtEQUFTOzs7QUFEcEJHLEtBQUFBLEtBQUs7O0FBeUJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanM/M2IxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgVXNlckNhcmRQb3N0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJDYXJkUG9zdHMnO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoeyBwb3N0c0RhdGEsIHBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0c0RhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c0NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3RzP3BhZ2U9JHtwYWdlIC0gMX1gKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+XHJcbiAgICAgICAgICAgIHsnPCBQcmV2aW91cyd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb3N0cz9wYWdlPSR7cGFnZSArIDF9YCl9IGRpc2FibGVkPXtwYWdlIDwgMX0+XHJcbiAgICAgICAgICAgIHsnTmV4dCA+J31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFVzZXJzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7cG9zdHNEYXRhLm1hcCgodXNlclBvc3RzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxVc2VyQ2FyZFBvc3RzIGtleT17dXNlclBvc3RzWzBdLmlkfSB7Li4udXNlclBvc3RzfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyBwYWdlID0gMSB9IH0pIHtcclxuICBjb25zdCBzdGFydCA9ICtwYWdlID09PSAxID8gMCA6ICgrcGFnZSAtIDEpICogMztcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP19saW1pdD0yMCZfc3RhcnQ9JHtzdGFydH0mX3BhZ2U9JHtwYWdlfWAsXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc3BsaXRQb3N0c1RvVXNlcnMgPSAoYXJyKSA9PiB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIGxldCBsYXN0ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJyW2ldPy51c2VySWQgIT09IGFycltpIC0gMV0/LnVzZXJJZCkge1xyXG4gICAgICAgIG91dHB1dC5wdXNoKGFyci5zbGljZShsYXN0LCBpKSk7XHJcbiAgICAgICAgbGFzdCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcG9zdHNEYXRhID0gc3BsaXRQb3N0c1RvVXNlcnMocG9zdHMuZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzRGF0YSwgcGFnZTogK3BhZ2UgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTWFpbkNvbnRhaW5lciIsIlVzZXJDYXJkUG9zdHMiLCJQb3N0cyIsInBvc3RzRGF0YSIsInBhZ2UiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJkaXNhYmxlZCIsIm1hcCIsInVzZXJQb3N0cyIsImkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

/***/ })

});