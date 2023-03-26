"use strict";
(() => {
var exports = {};
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 4666:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4439);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5740);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7543);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6965);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6073);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6942);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5641);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5332);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8186);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4001);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _nodes__WEBPACK_IMPORTED_MODULE_12__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _nodes__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const MDEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "authors/[author_id]/posts/create.tsx -> " + "@uiw/react-md-editor"
        ]
    },
    ssr: false
});
const Create = ({ authorId  })=>{
    const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("text/plain");
    const [markDownValue, setMarkDownValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)();
    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__.useSupabaseClient)();
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__.useUser)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const onSubmit = async (data)=>{
        if (data.contentType === "text/markdown") {
            data.content = markDownValue;
        } else if (data.contentType === "image/*") {
            data.content = await (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .getBase64 */ .y)(data.contentFile[0]);
        }
        if (data.contentFile) {
            delete data.contentFile;
        }
        data.categories = data.categories.split(",");
        try {
            let post = {
                ...data,
                source: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
                origin: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
                unlisted: data.visibility === "UNLISTED",
                visibility: data.visibility
            };
            let createdPost = await _nodes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].createPost */ .Z.createPost(authorId, post);
            if (createdPost) {
                await _nodes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].alertNewPost */ .Z.alertNewPost(authorId, createdPost);
            }
            await router.push(`/authors/${authorId}`);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Create Post"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-y-auto w-full py-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.FormProvider, {
                            ...form,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "max-w-5xl mx-auto px-8",
                                onSubmit: form.handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-xl font-semibold mb-5",
                                        children: "Create Post"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        register: form.register,
                                        extraClass: "mb-6",
                                        id: "title",
                                        name: "Title",
                                        placeholder: "Enter a title",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        register: form.register,
                                        id: "description",
                                        name: "Description",
                                        placeholder: "Enter a description"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        register: form.register,
                                        id: "contentType",
                                        name: "Post Type",
                                        value: selectValue,
                                        setValue: setSelectValue,
                                        options: [
                                            {
                                                name: "Markdown",
                                                value: "text/markdown"
                                            },
                                            {
                                                name: "Plain Text",
                                                value: "text/plain"
                                            },
                                            {
                                                name: "Image",
                                                value: "image/*"
                                            },
                                            {
                                                name: "Image Link",
                                                value: "image/link"
                                            }
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-2",
                                        children: [
                                            selectValue === "image/*" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_File__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                register: form.register,
                                                id: "contentFile"
                                            }),
                                            selectValue === "image/link" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                register: form.register,
                                                extraClass: "mb-6",
                                                id: "content",
                                                name: "Image Link",
                                                placeholder: "Enter an image link"
                                            }),
                                            selectValue === "text/markdown" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDEditor, {
                                                    style: {
                                                        minWidth: 480
                                                    },
                                                    value: markDownValue,
                                                    onChange: setMarkDownValue
                                                })
                                            }),
                                            selectValue === "text/plain" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                register: form.register,
                                                id: "content",
                                                name: "Content",
                                                placeholder: "Enter content"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                register: form.register,
                                                extraClass: "mb-4",
                                                id: "categories",
                                                name: "Categories",
                                                placeholder: "Enter categories, seperated via comma. ",
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block text-sm font-medium text-gray-900 dark:text-white",
                                                children: "Post Visibility"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                register: form.register,
                                                id: "visibility",
                                                name: "Post Visibility",
                                                options: [
                                                    {
                                                        name: "Public",
                                                        value: "PUBLIC"
                                                    },
                                                    {
                                                        name: "Private",
                                                        value: "PRIVATE"
                                                    },
                                                    {
                                                        name: "Unlisted",
                                                        value: "UNLISTED"
                                                    }
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        name: "Create Post",
                                        className: "text-white"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);
const getServerSideProps = async (context)=>{
    const supabaseServerClient = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_14__.createServerSupabaseClient)(context);
    const { data: { user  }  } = await supabaseServerClient.auth.getUser();
    if (!user) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        };
    }
    if (!await _nodes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].checkAuthorExists */ .Z.checkAuthorExists(user.id)) {
        return {
            redirect: {
                destination: "/onboarding",
                permanent: false
            }
        };
    }
    return {
        props: {
            authorId: user.id
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4715:
/***/ ((module) => {

module.exports = require("@material-tailwind/react");

/***/ }),

/***/ 4001:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ 6749:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,152,186,73,312,439,942], () => (__webpack_exec__(4666)));
module.exports = __webpack_exports__;

})();