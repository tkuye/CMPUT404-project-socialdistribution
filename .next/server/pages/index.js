"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const CommentInbox = ({ comment  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-gray-200 rounded-md p-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mb-3 space-x-3 font-medium text-gray-700",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: " text-gray-500 hover:underline",
                            href: `/authors/${comment.author?.id.split("/").pop()}`,
                            children: comment.author?.displayName
                        }),
                        " commented on your post."
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm text-gray-600",
                children: comment.comment
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentInbox);


/***/ }),

/***/ 8828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8186);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nodes__WEBPACK_IMPORTED_MODULE_2__]);
_nodes__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FollowInbox = ({ follow  })=>{
    const [isFollow, setIsFollow] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let actorId = follow.actor.id.split("/").pop() || "";
        let objectId = follow.object.id.split("/").pop() || "";
        _nodes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].checkFollowerStatus */ .Z.checkFollowerStatus(objectId, actorId).then((isfollow)=>{
            setIsFollow(isfollow !== "pending");
        });
    }, [
        isFollow
    ]);
    const approveFollow = async ()=>{
        let actorId = follow.actor.id.split("/").pop() || "";
        let objectId = follow.object.id.split("/").pop() || "";
        await _nodes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].addFollower */ .Z.addFollower(objectId, actorId);
        setIsFollow(true);
    };
    const rejectFollow = async ()=>{
        let actorId = follow.actor.id.split("/").pop() || "";
        let objectId = follow.object.id.split("/").pop() || "";
        await _nodes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].removeFollower */ .Z.removeFollower(objectId, actorId);
        setIsFollow(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border border-gray-200 rounded-md p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-3 font-medium items-center justify-between text-gray-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: follow.summary
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/authors/${follow.actor.id.split("/").pop()}`,
                        className: "text-sm text-gray-500 hover:underline",
                        children: follow.actor.displayName
                    })
                ]
            }),
            follow.summary.includes("wants") && !isFollow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-x-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "border text-gray-500 hover:bg-gray-50 border-gray-300 shadow-sm rounded-md px-3 py-1 text-sm",
                        onClick: approveFollow,
                        children: "Approve"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-red-500 border-red-500 border hover:bg-gray-50 bg-white rounded-md px-3 py-1 text-sm",
                        onClick: rejectFollow,
                        children: "Reject"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowInbox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const LikeInbox = ({ like  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border border-gray-200 rounded-md p-4 shadow-sm",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/authors/${like.author.id.split("/").pop()}/posts/${like.object.match(/(?<=\/posts\/)(.*?)(?=\/comments)/g)}`,
            dangerouslySetInnerHTML: {
                __html: like.summary
            },
            className: "flex space-x-3 font-medium text-gray-500 hover:underline"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeInbox);


/***/ }),

/***/ 5970:
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
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6073);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4001);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8186);
/* harmony import */ var _components_inbox_CommentInbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6521);
/* harmony import */ var _components_inbox_FollowInbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8828);
/* harmony import */ var _components_inbox_LikeInbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nodes__WEBPACK_IMPORTED_MODULE_6__, _components_inbox_FollowInbox__WEBPACK_IMPORTED_MODULE_8__]);
([_nodes__WEBPACK_IMPORTED_MODULE_6__, _components_inbox_FollowInbox__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Post = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "@/components/Post"
        ]
    },
    ssr: false
});







const Stream = ({ inbox  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Stream"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 flex-col overflow-y-auto w-full py-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mx-auto bg-white px-6 max-w-4xl space-y-2",
                                children: inbox.items.map((item)=>{
                                    switch(item.type.toLowerCase()){
                                        case "post":
                                            item = item;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Post, {
                                                post: item
                                            }, item.id);
                                        case "follow":
                                            item = item;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inbox_FollowInbox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                follow: item
                                            }, item.summary);
                                        case "like":
                                            item = item;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inbox_LikeInbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                like: item
                                            }, item.summary);
                                        case "comment":
                                            item = item;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inbox_CommentInbox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                comment: item
                                            }, item.id || item.published);
                                    }
                                })
                            }),
                            inbox.items.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mx-auto bg-white px-6 max-w-4xl",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center h-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-3xl font-bold text-gray-700 mb-3",
                                            children: "No Activity Yet"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-500",
                                            children: "Maybe follow some friends so you can have some activity?"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stream);
const getServerSideProps = async (context)=>{
    const supabaseServerClient = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_5__.createServerSupabaseClient)(context);
    const { data: { user  }  } = await supabaseServerClient.auth.getUser();
    if (!user) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        };
    }
    if (!await _nodes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].checkAuthorExists */ .Z.checkAuthorExists(user.id)) {
        return {
            redirect: {
                destination: "/onboarding",
                permanent: false
            }
        };
    }
    let inbox = await _nodes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getInbox */ .Z.getInbox(user.id);
    let inboxItems = inbox.items.map(async (item)=>{
        try {
            if (item.type.toLowerCase() === "post") {
                item = item;
                let url = item.id.split("/");
                let id = url[url.length - 1];
                let authorId = url[url.length - 3];
                let it = await _nodes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getPost */ .Z.getPost(authorId, id);
                if (!it) {
                    return item;
                }
                return it;
            } else {
                return item;
            }
        } catch (error) {
            console.log(error);
            return item;
        }
    });
    inbox.items = await Promise.all(inboxItems);
    return {
        props: {
            inbox
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,152,186,73], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();