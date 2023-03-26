(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6961);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9157);
/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4720);
/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4001);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__);







function App({ Component , pageProps  }) {
    const [supabaseClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__.createBrowserSupabaseClient)());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__.SessionContextProvider, {
        supabaseClient: supabaseClient,
        initialSession: pageProps.initialSession,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 4720:
/***/ (() => {



/***/ }),

/***/ 9157:
/***/ (() => {



/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 4001:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ 6749:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6505));
module.exports = __webpack_exports__;

})();