"use strict";
exports.id = 326;
exports.ids = [326];
exports.modules = {

/***/ 7543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ name , className , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "submit",
        onClick: onClick,
        className: `bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`,
        children: name
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8186);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nodes__WEBPACK_IMPORTED_MODULE_4__]);
_nodes__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Comment = ({ id , author , comment  })=>{
    const [commentLiked, setCommentLiked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__.useUser)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user) return;
        let authorId = author.id.split("/").pop() || "";
        let commentId = id?.split("/").pop() || "";
        _nodes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].isCommentLiked */ .Z.isCommentLiked(commentId, user.id).then((liked)=>{
            setCommentLiked(liked);
        });
    }, [
        user
    ]);
    const likeComment = async ()=>{
        if (!user) return;
        let userAuthor = await _nodes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAuthor */ .Z.getAuthor(user.id);
        if (!userAuthor) return;
        let authorId = author.id.split("/").pop() || "";
        await _nodes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].createCommentLike */ .Z.createCommentLike(authorId, {
            comment,
            id,
            contentType: "text/plain",
            author: author,
            type: "comment"
        }, userAuthor);
        setCommentLiked(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white border-gray-200 border-b p-3 shadow-md",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "h-10 w-10 rounded-full",
                                src: author.profileImage,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "text-sm font-medium text-gray-800 hover:underline",
                                    href: "/authors/" + author.id.split("/").pop() || 0,
                                    children: author.displayName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-shrink-0 flex text-sm text-gray-600",
                                    children: comment
                                })
                            ]
                        })
                    ]
                }),
                !commentLiked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.ThumbsUp, {
                    onClick: likeComment,
                    className: "w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
                }),
                commentLiked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.ThumbsUp, {
                    className: "text-blue-500 w-6 h-6 hover:text-blue-500 cursor-pointer"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1904);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1185);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8186);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5641);
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4439);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7543);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(691);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, _nodes__WEBPACK_IMPORTED_MODULE_8__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _Comment__WEBPACK_IMPORTED_MODULE_14__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, _nodes__WEBPACK_IMPORTED_MODULE_8__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _Comment__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 
















const Post = ({ post , comments  })=>{
    const [liked, setLiked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_10__.useUser)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const commentForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)();
    const closeModal = ()=>{
        setIsOpen(false);
        commentForm.reset();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let postId = post.id.split("/").pop();
        if (!user) return;
        _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].isPostLiked */ .Z.isPostLiked(postId || "", user?.id || ``).then((res)=>{
            if (res) {
                setLiked(true);
            }
        });
    }, [
        user
    ]);
    const likePost = async ()=>{
        let authorId = post.author.id.split("/").pop() || "";
        if (liked) return;
        let authorUser = await _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAuthor */ .Z.getAuthor(user?.id || ``);
        if (authorUser) {
            await _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].createLike */ .Z.createLike(authorId, post, authorUser);
            setLiked(true);
        }
    };
    const onSubmit = async (data)=>{
        let authorId = post.author.id.split("/").pop() || "";
        let postId = post.id.split("/").pop() || "";
        let authorUser = await _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAuthor */ .Z.getAuthor(user?.id || ``);
        if (authorUser) {
            let comment = {
                type: "comment",
                comment: data.comment,
                contentType: "text/plain",
                published: new Date().toISOString(),
                author: authorUser
            };
            await _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].createComment */ .Z.createComment(authorId, postId, comment);
            let link = `/authors/${post.author.id.split("/").pop()}/posts/${post.id.split("/").pop()}`;
            await router.push(link);
        }
        closeModal();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col border border-gray-100 shadow-sm rounded-sm mb-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row justify-between items-center pt-4 px-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/authors/${post.author.id.split("/").slice(-1)}/posts/${post.id.split("/").slice(-1)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-base hover:underline text-gray-700 font-semibold",
                                children: post.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: post.author.id.includes(user?.id || "") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {
                                as: "div",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Button, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.EllipsisHorizontalIcon, {
                                            className: "w-7 h-7 text-gray-700 cursor-pointer"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Items, {
                                        className: "absolute right-0 mt-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: `block px-4 py-2 text-sm text-gray-700 ${active ? "bg-gray-100" : ""}`,
                                                        href: `/authors/${user?.id || ""}/posts/${post.id.split("/").slice(-1)}/edit`,
                                                        children: "Edit"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        onClick: async ()=>{
                                                            let postId = post.id.split("/").pop();
                                                            let authorId = post.author.id.split("/").pop();
                                                            await _nodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].deletePost */ .Z.deletePost(authorId || "", postId || "");
                                                            await router.reload();
                                                        },
                                                        className: `block px-4 py-2 text-sm text-gray-700 ${active ? "bg-gray-100" : ""}`,
                                                        href: "#",
                                                        children: "Delete"
                                                    })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `my-3 border-t border-b border-gray-100 ${!post.contentType.includes("image") ? "p-5" : ""}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            post.contentType === "text/markdown" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3___default()), {
                                options: {
                                    overrides: {
                                        h1: {
                                            component: "h1",
                                            props: {
                                                className: "text-2xl font-semibold text-gray-700"
                                            }
                                        },
                                        h2: {
                                            component: "h2",
                                            props: {
                                                className: "text-xl font-semibold text-gray-700"
                                            }
                                        },
                                        h3: {
                                            component: "h3",
                                            props: {
                                                className: "text-lg font-semibold text-gray-700"
                                            }
                                        },
                                        h4: {
                                            component: "h4",
                                            props: {
                                                className: "text-base font-semibold text-gray-700"
                                            }
                                        },
                                        h5: {
                                            component: "h5",
                                            props: {
                                                className: "text-sm font-semibold text-gray-700"
                                            }
                                        },
                                        h6: {
                                            component: "h6",
                                            props: {
                                                className: "text-xs font-semibold text-gray-700"
                                            }
                                        },
                                        p: {
                                            component: "p",
                                            props: {
                                                className: "text-gray-700"
                                            }
                                        },
                                        a: {
                                            component: "a",
                                            props: {
                                                className: "text-blue-500"
                                            }
                                        },
                                        ul: {
                                            component: "ul",
                                            props: {
                                                className: "list-disc list-inside"
                                            }
                                        },
                                        ol: {
                                            component: "ol",
                                            props: {
                                                className: "list-decimal list-inside"
                                            }
                                        },
                                        li: {
                                            component: "li",
                                            props: {
                                                className: "text-gray-700"
                                            }
                                        },
                                        table: {
                                            component: "table",
                                            props: {
                                                className: "table-auto"
                                            }
                                        },
                                        th: {
                                            component: "th",
                                            props: {
                                                className: "border px-4 py-2"
                                            }
                                        },
                                        td: {
                                            component: "td",
                                            props: {
                                                className: "border px-4 py-2"
                                            }
                                        },
                                        tr: {
                                            component: "tr",
                                            props: {
                                                className: "bg-gray-100"
                                            }
                                        },
                                        thead: {
                                            component: "thead",
                                            props: {
                                                className: "bg-gray-200"
                                            }
                                        },
                                        tbody: {
                                            component: "tbody",
                                            props: {
                                                className: "bg-gray-100"
                                            }
                                        },
                                        blockquote: {
                                            component: "blockquote",
                                            props: {
                                                className: "border-l-4 border-gray-200 pl-4 italic"
                                            }
                                        },
                                        img: {
                                            component: "img",
                                            props: {
                                                className: "w-full"
                                            }
                                        },
                                        br: {
                                            component: "br",
                                            props: {
                                                className: "w-full"
                                            }
                                        },
                                        b: {
                                            component: "b",
                                            props: {
                                                className: "font-bold"
                                            }
                                        },
                                        i: {
                                            component: "i",
                                            props: {
                                                className: "italic"
                                            }
                                        },
                                        em: {
                                            component: "em",
                                            props: {
                                                className: "italic"
                                            }
                                        },
                                        strong: {
                                            component: "strong",
                                            props: {
                                                className: "font-bold"
                                            }
                                        },
                                        code: {
                                            component: "code",
                                            props: {
                                                className: "bg-gray-200 rounded-sm px-1"
                                            }
                                        },
                                        pre: {
                                            component: "pre",
                                            props: {
                                                className: "bg-gray-200 rounded-sm px-1"
                                            }
                                        },
                                        hr: {
                                            component: "hr",
                                            props: {
                                                className: "border-gray-200"
                                            }
                                        }
                                    }
                                },
                                children: post.content
                            }),
                            post.contentType === "text/plain" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: post.content
                            }),
                            post.contentType === "image/*" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "object-cover w-full h-full",
                                src: post.content,
                                alt: post.title
                            }),
                            post.contentType === "image/link" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "object-cover w-full h-full",
                                src: post.content,
                                alt: post.title
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center justify-between px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-gray-500 ",
                            children: post.description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "flex flex-row space-x-3 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border-r border-gray-200 pr-3 flex space-x-2 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.MessageCircle, {
                                            className: "h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer",
                                            onClick: ()=>setIsOpen(true)
                                        }),
                                        !liked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.ThumbsUp, {
                                            className: "h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer",
                                            onClick: likePost
                                        }),
                                        liked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.ThumbsUp, {
                                            className: "h-5 w-5 text-pink-600 hover:text-pink-600 cursor-pointer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                                    content: "Reshare Post",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.Share, {
                                        className: "h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                                    content: "Copy Link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.Link2, {
                                        className: "h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer",
                                        onClick: ()=>{
                                            navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/authors/${post.author.id.split("/").pop()}/posts/${post.id.split("/").pop()}`);
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "px-6",
                    children: post.categories.map((category, index)=>{
                        let comma = index === post.categories.length - 1 ? "" : ", ";
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-gray-400 text-sm",
                            children: [
                                category,
                                comma,
                                " "
                            ]
                        }, index);
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row justify-between items-center mb-2 px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: post.source || "#",
                            className: "text-blue-500 hover:underline text-sm",
                            children: "source"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "text-gray-500 font-medium text-sm mt-1",
                            href: post.author.url || "/authors/" + post.author.id,
                            children: [
                                "Posted By ",
                                post.author.displayName
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-6 py-2 flex flex-row items-center justify-between text-gray-400 border-t border-gray-200 text-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                comments ? comments.length : post.count,
                                " comments"
                            ]
                        }),
                        !comments && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/authors/${post.author.id.split("/").pop()}/posts/${post.id.split("/").pop()}`,
                            children: "View all comments"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " border-t border-gray-200",
                    children: comments && comments.map((comment, index)=>{
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Comment__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            ...comment,
                            key: index
                        });
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition, {
                    appear: true,
                    show: isOpen,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                        as: "div",
                        className: "relative z-10",
                        onClose: closeModal,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fixed inset-0 bg-black bg-opacity-25"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex min-h-full items-center justify-center p-4 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition.Child, {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog.Panel, {
                                            className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog.Title, {
                                                    as: "h3",
                                                    className: "text-lg font-medium leading-6 text-gray-900",
                                                    children: [
                                                        post.title,
                                                        " Comment"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.FormProvider, {
                                                    ...commentForm,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                        onSubmit: commentForm.handleSubmit(onSubmit),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-4",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Textarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                    register: commentForm.register,
                                                                    id: "comment",
                                                                    name: "",
                                                                    placeholder: "Say Something..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-4",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                    name: "Submit",
                                                                    className: "w-full text-white"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;