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

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\nvar Posts = function(param) {\n    var postsData = param.postsData;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(_toConsumableArray(postsData), 2), posts = ref[0], setPosts = ref[1];\n    var pagesNumbers = Math.floor(posts.length / 2);\n    var ref1 = _slicedToArray(useState(1), 2), currentPage = ref1[0], setCurrentPage = ref1[1];\n    var indexOfLastItem = currentPage * itemsPerPage;\n    var indexOfFirstItem = indexOfLastItem - itemsPerPage;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postsContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"paginationContainer\",\n                children: pagesNumbers.map(function(numb, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: currentPage === numb ? \"active\" : \"\",\n                        onClick: function() {\n                            return setCurrentPage(numb);\n                        },\n                        children: numb\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cardUsersContainer\",\n                children: posts.map(function(userPosts) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\posts.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Posts, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = Posts;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxnQkFBbUI7UUFBaEJDLFNBQVMsU0FBVEEsU0FBUzs7O0lBQ3hCLElBQTJCLEdBQUdBLGtCQUFILG1CQUFHQSxTQUFTLENBQVRBLElBQUFBLEVBQXZCQyxLQUFLLEdBQWUsR0FBR0QsR0FBbEIsRUFBRUUsUUFBUSxHQUFLLEdBQUdGLEdBQVI7SUFFdEIsSUFBTUcsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osS0FBSyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWpELElBQXNDQyxJQUFXLGtCQUFYQSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQTFDQyxXQUFXLEdBQW9CRCxJQUFXLEdBQS9CLEVBQUVFLGNBQWMsR0FBSUYsSUFBVyxHQUFmO0lBRWxDLElBQU1HLGVBQWUsR0FBR0YsV0FBVyxHQUFHRyxZQUFZO0lBQ2xELElBQU1DLGdCQUFnQixHQUFHRixlQUFlLEdBQUdDLFlBQVk7SUFFdkQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7MEJBQzdCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOzBCQUNqQ1gsWUFBWSxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDO3lDQUN4Qiw4REFBQ0MsUUFBTTt3QkFDTEosU0FBUyxFQUFFTixXQUFXLEtBQUtRLElBQUksR0FBRyxRQUFRLEdBQUcsRUFBRTt3QkFDL0NHLE9BQU8sRUFBRTttQ0FBTVYsY0FBYyxDQUFDTyxJQUFJLENBQUM7eUJBQUE7a0NBRWxDQSxJQUFJO3VCQURBQyxDQUFDOzs7OzhCQUVDO2lCQUNWLENBQUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0JBQW9COzBCQUNoQ2IsS0FBSyxDQUFDYyxHQUFHLENBQUMsU0FBQ0ssU0FBUzt5Q0FDbkIsOERBQUNDLEdBQUM7a0NBQUMsTUFBSTs7Ozs7OEJBQUk7aUJBQ1osQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtHQTdCS3RCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSzs7QUErQlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy5qcz81M2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSBbLi4ucG9zdHNEYXRhXTtcclxuXHJcbiAgY29uc3QgcGFnZXNOdW1iZXJzID0gTWF0aC5mbG9vcihwb3N0cy5sZW5ndGggLyAyKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgaW5kZXhPZkxhc3RJdGVtID0gY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0SXRlbSA9IGluZGV4T2ZMYXN0SXRlbSAtIGl0ZW1zUGVyUGFnZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNDb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAge3BhZ2VzTnVtYmVycy5tYXAoKG51bWIsIGkpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gbnVtYiA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKG51bWIpfVxyXG4gICAgICAgICAgICBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7bnVtYn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkVXNlcnNDb250YWluZXJcIj5cclxuICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdHMpID0+IChcclxuICAgICAgICAgIDxwPnBvc3Q8L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKTtcclxuXHJcbiAgY29uc3QgcG9zdHNEYXRhID0gcG9zdHMuZGF0YTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHNEYXRhIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0c0RhdGEiLCJwb3N0cyIsInNldFBvc3RzIiwicGFnZXNOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaW5kZXhPZkxhc3RJdGVtIiwiaXRlbXNQZXJQYWdlIiwiaW5kZXhPZkZpcnN0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm51bWIiLCJpIiwiYnV0dG9uIiwib25DbGljayIsInVzZXJQb3N0cyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ })

});