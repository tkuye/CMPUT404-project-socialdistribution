"use strict";
(() => {
var exports = {};
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 7140:
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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7543);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6073);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8326);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4001);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Post__WEBPACK_IMPORTED_MODULE_5__, _nodes__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Post__WEBPACK_IMPORTED_MODULE_5__, _nodes__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Page = ({ author: { id , displayName , github , profileImage  } , author , posts , followStatus  })=>{
    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__.useSupabaseClient)();
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_6__.useUser)();
    const [followStatusState, setFollowStatusState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(followStatus);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Author Profile"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-1 flex-col overflow-y-auto w-full py-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-4xl w-full mx-auto px-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col border-b border-slate-200 pb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "rounded-full w-24 h-24 object-cover mb-3 ",
                                            src: profileImage,
                                            width: 100,
                                            height: 100,
                                            alt: displayName
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-xl font-medium",
                                                    children: displayName
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-row space-x-3",
                                                    children: id.includes(user?.id || "user") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        name: "Edit Profile",
                                                        onClick: ()=>{
                                                            let author_id = router.query.author_id;
                                                            router.push("/authors/" + author_id + "/edit");
                                                        },
                                                        className: "bg-white text-gray-600 border-2 border-gray-100 hover:bg-gray-50 focus:ring-gray-100"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        onClick: async ()=>{
                                                            try {
                                                                if (followStatusState === "not_friends") {
                                                                    let authorTo = await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getAuthor */ .Z.getAuthor(id.split("/").pop() || "");
                                                                    let userAuthor = await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getAuthor */ .Z.getAuthor(user?.id || "");
                                                                    if (authorTo && userAuthor) {
                                                                        await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].sendFollowRequest */ .Z.sendFollowRequest(authorTo, userAuthor);
                                                                        setFollowStatusState("pending");
                                                                    }
                                                                } else if (followStatusState === "friends") {
                                                                    await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].removeFollower */ .Z.removeFollower(id.split("/").pop() || "", user?.id || "");
                                                                    setFollowStatusState("not_friends");
                                                                } else if (followStatusState === "true_friends") {
                                                                    await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].removeFollower */ .Z.removeFollower(id.split("/").pop() || "", user?.id || "");
                                                                    setFollowStatusState("not_friends");
                                                                }
                                                            } catch  {
                                                                console.log("error");
                                                            }
                                                        },
                                                        name: followStatusState === "not_friends" ? "Follow" : followStatusState === "friends" ? "Unfollow" : followStatusState === "true_friends" ? "Unfriend" : "Pending",
                                                        className: "text-white"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-gray",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: github,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_8__.GitHub, {
                                                    className: "inline-block w-5 h-5 text-gray-500 hover:text-gray-700"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-4",
                                    children: posts.map((post)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            post: post
                                        }, post.id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const supabaseServerClient = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_10__.createServerSupabaseClient)(context);
    const { data: { user  }  } = await supabaseServerClient.auth.getUser();
    if (!user) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        };
    }
    let res = null;
    if (!await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].checkAuthorExists */ .Z.checkAuthorExists(context.params?.author_id)) {
        return {
            redirect: {
                destination: "/onboarding",
                permanent: false
            }
        };
    }
    let posts = await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getPosts */ .Z.getPosts(context.params?.author_id);
    let author = await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getAuthor */ .Z.getAuthor(context.params?.author_id);
    if (!author) {
        return {
            redirect: {
                destination: "/onboarding",
                permanent: false
            }
        };
    }
    let followStatus;
    if (user.id !== context.params?.author_id) {
        followStatus = await _nodes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].checkFollowerStatus */ .Z.checkFollowerStatus(context.params?.author_id, user.id);
        if (followStatus === "true_friends") {
            posts.items = posts.items.filter((post)=>post.visibility === "PUBLIC" || post.visibility === "PRIVATE");
        } else {
            posts.items = posts.items.filter((post)=>post.visibility === "PUBLIC");
        }
        // for (let post of posts.items) {
        // 	console.log(post);
        // }
        return {
            props: {
                author: author,
                posts: posts.items,
                followStatus: followStatus
            }
        };
    } else {
        // for (let post of posts.items) {
        // 	console.log(post);
        // }
        return {
            props: {
                author: author,
                posts: posts.items,
                followStatus: ""
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

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

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

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

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,186,73,439,326], () => (__webpack_exec__(7140)));
module.exports = __webpack_exports__;

})();