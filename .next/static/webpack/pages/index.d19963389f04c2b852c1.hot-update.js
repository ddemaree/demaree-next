/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils/date */ \"./lib/utils/date.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_BlogPostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPostCard */ \"./components/BlogPostCard.js\");\n/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SocialLinks */ \"./components/SocialLinks.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/david/Projects/demaree-next/pages/index.js\";\n// import RSSParser from 'rss-parser'\n// import { DateTime } from 'luxon'\n// import { getPosts } from '../lib/data/ghostApi'\n\n\n\n\n\nfunction HomePage(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts,\n      latestSubstack = _ref.latestSubstack;\n\n  var Section = function Section(_ref2) {\n    var children = _ref2.children;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"my-16\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 37\n    }, _this);\n  };\n\n  var Headline = function Headline(_ref3) {\n    var children = _ref3.children;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"uppercase font-sans-display font-semibold tracking-wider text-center text-lg text-accent mb-4\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 38\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    hideFooterSocials: true,\n    activeNav: \"home\",\n    wrapperClassName: \"dd-surface-green-900 dd-inkMedium-green-300 dd-ink-green-100 dd-accent-red-400 dd-inkBold-white dd-inkLight-green-600\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"font-serif max-w-2xl mx-auto p-8 pt-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex flex-col items-center text-center mb-12 sm:mb-16\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n          className: \"w-full max-w-xl mb-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"//res.cloudinary.com/demaree/image/upload/w_800,q_auto/demaree-dot-me/images/david-acnh-xmas.jpg\",\n            alt: \"The author wearing Christmas sweater in Animal Crossing New Horizons\",\n            width: 836,\n            height: 538,\n            className: \"w-full rounded-2xl\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"font-sans-display font-semibold text-4xl xs:text-5xl my-2 text-inkBold\",\n          children: \"David Demaree\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"font-sans text-xl xs:text-2xl text-inkMedium max-w-lg mb-8\",\n          children: \"NYC-based product person, writer, photographer, and coder\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, this), latestSubstack && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Headline, {\n          children: \"Plague Diaries\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"dd-prose -mx-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"I've been writing a ~weekly Substack newsletter during Covid\\u201319. The latest issue was \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: latestSubstack.link,\n              children: latestSubstack.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 100\n            }, this), \", posted on \", (0,_lib_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDate)(latestSubstack.isoDate), \".\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"flex flex-col sm:flex-row sm:items-center text-center justify-center mt-6\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"inline-block dd-button bg-accent text-inkBold\",\n            href: \"https://demaree.substack.com\",\n            children: \"Subscribe\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 11\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"mt-4 sm:mt-0 sm:ml-4 inline-block dd-button bg-accent text-inkBold\",\n            href: \"https://demaree.substack.com/archive?sort=new\",\n            children: \"Browse issues\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 26\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Headline, {\n          children: \"Blog Posts\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 10\n  }, this);\n}\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInBvc3RzIiwibGF0ZXN0U3Vic3RhY2siLCJTZWN0aW9uIiwiY2hpbGRyZW4iLCJIZWFkbGluZSIsImxpbmsiLCJ0aXRsZSIsImZvcm1hdERhdGUiLCJpc29EYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsUUFBVCxPQUE2QztBQUFBOztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUUzQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHdCQUFrQjtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQXdCQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWxCO0FBQUEsR0FBaEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHRCxRQUFILFNBQUdBLFFBQUg7QUFBQSx3QkFBa0I7QUFBSSxlQUFTLEVBQUMsK0ZBQWQ7QUFBQSxnQkFBZ0hBO0FBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbEI7QUFBQSxHQUFqQjs7QUFFQSxzQkFBTyw4REFBQyx1REFBRDtBQUFRLHFCQUFpQixFQUFFLElBQTNCO0FBQWlDLGFBQVMsRUFBQyxNQUEzQztBQUFrRCxvQkFBZ0IsRUFBQyx1SEFBbkU7QUFBQSwyQkFDTDtBQUFLLGVBQVMsRUFBQyx1Q0FBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyx1REFBbEI7QUFBQSxnQ0FDRTtBQUFRLG1CQUFTLEVBQUMsc0JBQWxCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsa0dBQVQ7QUFBNEcsZUFBRyxFQUFDLHNFQUFoSDtBQUF1TCxpQkFBSyxFQUFFLEdBQTlMO0FBQW1NLGtCQUFNLEVBQUUsR0FBM007QUFBZ04scUJBQVMsRUFBQztBQUExTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUksbUJBQVMsRUFBQyx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQUksbUJBQVMsRUFBQyw0REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU9FLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFZR0YsY0FBYyxpQkFBSSw4REFBQyxPQUFEO0FBQUEsZ0NBQ2pCLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGlCLGVBRWpCO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGlDQUNFO0FBQUEsbUlBQXlGO0FBQUcsa0JBQUksRUFBRUEsY0FBYyxDQUFDSSxJQUF4QjtBQUFBLHdCQUErQkosY0FBYyxDQUFDSztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF6RixrQkFBOEpDLDJEQUFVLENBQUNOLGNBQWMsQ0FBQ08sT0FBaEIsQ0FBeEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGaUIsZUFLakI7QUFBSyxtQkFBUyxFQUFDLDJFQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLCtDQUFiO0FBQTZELGdCQUFJLEVBQUMsOEJBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLG9FQUFiO0FBQWtGLGdCQUFJLEVBQUMsK0NBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWnJCLGVBdUJFLDhEQUFDLE9BQUQ7QUFBQSwrQkFDRSw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUF1Q0Q7O0tBNUNRVCxROztBQThDVCwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJTU1BhcnNlciBmcm9tICdyc3MtcGFyc2VyJ1xuLy8gaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbidcbi8vIGltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi4vbGliL2RhdGEvZ2hvc3RBcGknXG5cblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2xpYi91dGlscy9kYXRlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBCbG9nUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nUG9zdENhcmQnXG5pbXBvcnQgU29jaWFsTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcydcbmltcG9ydCBhcG9sbG9DbGllbnQgZnJvbSAnLi4vbGliL2RhdGEvYXBvbGxvLWNsaWVudCdcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgcG9zdHMsIGxhdGVzdFN1YnN0YWNrIH0pIHtcblxuICBjb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4gfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJteS0xNlwiPntjaGlsZHJlbn08L2Rpdj5cbiAgY29uc3QgSGVhZGxpbmUgPSAoeyBjaGlsZHJlbiB9KSA9PiA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtc2Fucy1kaXNwbGF5IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWFjY2VudCBtYi00XCI+eyBjaGlsZHJlbiB9PC9oMj4gXG5cbiAgcmV0dXJuIDxMYXlvdXQgaGlkZUZvb3RlclNvY2lhbHM9e3RydWV9IGFjdGl2ZU5hdj1cImhvbWVcIiB3cmFwcGVyQ2xhc3NOYW1lPVwiZGQtc3VyZmFjZS1ncmVlbi05MDAgZGQtaW5rTWVkaXVtLWdyZWVuLTMwMCBkZC1pbmstZ3JlZW4tMTAwIGRkLWFjY2VudC1yZWQtNDAwIGRkLWlua0JvbGQtd2hpdGUgZGQtaW5rTGlnaHQtZ3JlZW4tNjAwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmIG1heC13LTJ4bCBteC1hdXRvIHAtOCBwdC0yXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG1iLTEyIHNtOm1iLTE2XCI+XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIG1iLTRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbWFyZWUvaW1hZ2UvdXBsb2FkL3dfODAwLHFfYXV0by9kZW1hcmVlLWRvdC1tZS9pbWFnZXMvZGF2aWQtYWNuaC14bWFzLmpwZ1wiIGFsdD1cIlRoZSBhdXRob3Igd2VhcmluZyBDaHJpc3RtYXMgc3dlYXRlciBpbiBBbmltYWwgQ3Jvc3NpbmcgTmV3IEhvcml6b25zXCIgd2lkdGg9ezgzNn0gaGVpZ2h0PXs1Mzh9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bFwiIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zYW5zLWRpc3BsYXkgZm9udC1zZW1pYm9sZCB0ZXh0LTR4bCB4czp0ZXh0LTV4bCBteS0yIHRleHQtaW5rQm9sZFwiPkRhdmlkIERlbWFyZWU8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQteGwgeHM6dGV4dC0yeGwgdGV4dC1pbmtNZWRpdW0gbWF4LXctbGcgbWItOFwiPk5ZQy1iYXNlZCBwcm9kdWN0IHBlcnNvbiwgd3JpdGVyLCBwaG90b2dyYXBoZXIsIGFuZCBjb2RlcjwvaDI+XG5cbiAgICAgICAgPFNvY2lhbExpbmtzIC8+XG4gICAgICA8L2hlYWRlcj5cblxuXG4gICAgICB7bGF0ZXN0U3Vic3RhY2sgJiYgPFNlY3Rpb24+XG4gICAgICAgIDxIZWFkbGluZT5QbGFndWUgRGlhcmllczwvSGVhZGxpbmU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGQtcHJvc2UgLW14LThcIj5cbiAgICAgICAgICA8cD5JJ3ZlIGJlZW4gd3JpdGluZyBhIH53ZWVrbHkgU3Vic3RhY2sgbmV3c2xldHRlciBkdXJpbmcgQ292aWTigJMxOS4gVGhlIGxhdGVzdCBpc3N1ZSB3YXMgPGEgaHJlZj17bGF0ZXN0U3Vic3RhY2subGlua30+e2xhdGVzdFN1YnN0YWNrLnRpdGxlfTwvYT4sIHBvc3RlZCBvbiB7Zm9ybWF0RGF0ZShsYXRlc3RTdWJzdGFjay5pc29EYXRlKX0uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGRkLWJ1dHRvbiBiZy1hY2NlbnQgdGV4dC1pbmtCb2xkXCIgaHJlZj1cImh0dHBzOi8vZGVtYXJlZS5zdWJzdGFjay5jb21cIj5TdWJzY3JpYmU8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtNCBzbTptdC0wIHNtOm1sLTQgaW5saW5lLWJsb2NrIGRkLWJ1dHRvbiBiZy1hY2NlbnQgdGV4dC1pbmtCb2xkXCIgaHJlZj1cImh0dHBzOi8vZGVtYXJlZS5zdWJzdGFjay5jb20vYXJjaGl2ZT9zb3J0PW5ld1wiPkJyb3dzZSBpc3N1ZXM8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPn1cblxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIZWFkbGluZT5CbG9nIFBvc3RzPC9IZWFkbGluZT5cbiAgICAgICAgey8qIHBvc3RzLm1hcChwID0+XG4gICAgICAgICAgPEJsb2dQb3N0Q2FyZFxuICAgICAgICAgICAga2V5PXtwLnV1aWR9XG4gICAgICAgICAgICBsaW5rPXtgL3AvJHtwLnNsdWd9YH1cbiAgICAgICAgICAgIHRpdGxlPXtwLnRpdGxlfVxuICAgICAgICAgICAgZXhjZXJwdD17cC5leGNlcnB0fVxuICAgICAgICAgICAgcHViRGF0ZT17cC5wdWJsaXNoZWRfYXR9XG4gICAgICAgICAgICByZWFkaW5nVGltZT17cC5yZWFkaW5nX3RpbWV9XG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlPXtwLmZlYXR1cmVfaW1hZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IGxhc3Q6bWItMFwiIC8+KSAqL31cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgQWxsUG9zdHMge1xuICAgICAgICBwb3N0cyB7XG4gICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0pXG4gIGNvbnNvbGUubG9nKGRhdGEucG9zdHMubm9kZXMpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IFtdLFxuICAgICAgcmVjZW50U3Vic3RhY2tzOiBbXSxcbiAgICAgIGxhdGVzdFN1YnN0YWNrOiBudWxsXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});