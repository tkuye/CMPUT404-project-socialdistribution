"use strict";
(() => {
var exports = {};
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 1942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5740);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7543);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6965);
/* harmony import */ var _components_GitHubUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8034);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8186);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5332);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4001);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _nodes__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _nodes__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Create = ({})=>{
    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_7__.useSupabaseClient)();
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_7__.useUser)();
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const onSubmit = async (data)=>{
        data.profileImage = await (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .getBase64 */ .y)(data.profile[0]);
        data.id = user?.id;
        data.github = "https://github.com/" + data.github;
        delete data.profile;
        data.host = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        data.url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000" + "/authors/" + user?.id;
        data.type = "author";
        try {
            await _nodes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].createAuthor */ .Z.createAuthor(data);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Create Profile"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-1 overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " overflow-y-auto w-full py-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "max-w-5xl mx-auto px-8",
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl font-semibold mb-5",
                                children: "Create Profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                register: register,
                                extraClass: "mb-6",
                                id: "displayName",
                                name: "Display Name",
                                placeholder: "John Doe",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block mb-2 text-sm font-medium",
                                children: "GitHub"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GitHubUrl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                register: register,
                                extraClass: "mb-6",
                                id: "github",
                                placeholder: "github",
                                required: false
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block mb-2 text-sm font-medium",
                                children: "Profile Picture"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_File__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                register: register,
                                id: "profile",
                                filePreviewClass: "w-44 h-44 object-cover rounded-full",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                name: "Create Profile",
                                className: "text-white"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);
const getServerSideProps = async (context)=>{
    const supabaseServerClient = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_11__.createServerSupabaseClient)(context);
    const { data: { user  }  } = await supabaseServerClient.auth.getUser();
    if (!user) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        };
    }
    if (await _nodes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].checkAuthorExists */ .Z.checkAuthorExists(user.id)) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4001:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ 6749:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [186,312,34], () => (__webpack_exec__(1942)));
module.exports = __webpack_exports__;

})();