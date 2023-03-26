"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 6073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const Sidebar = ({})=>{
    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__.useSupabaseClient)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__.useUser)();
    if (!user) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-between items-center w-16 h-screen border-r border-gray-100 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            placement: "right",
                            content: "Home",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Home, {
                                className: `w-6 h-6 mx-auto mt-4 text-gray-500 hover:text-gray-700 ${router.asPath === "/" ? "text-gray-800" : ""}`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/authors/${user.id}/posts/create`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            placement: "right",
                            content: "Create Post",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.FilePlus, {
                                className: `w-6 h-6 mx-auto mt-4 text-gray-500 hover:text-gray-700 ${router.asPath === "/posts/create" ? "text-gray-800" : ""}`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/search",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            placement: "right",
                            content: "Search",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Search, {
                                className: `w-6 h-6 mx-auto mt-4 text-gray-500 hover:text-gray-700 ${router.asPath === "/search" ? "text-gray-800" : ""}`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/authors/${user.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                            placement: "right",
                            content: "Profile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.User, {
                                className: `w-6 h-6 mx-auto mt-4 text-gray-500 hover:text-gray-700 ${router.asPath.includes("/profile") ? "text-gray-800" : ""}`
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    placement: "right",
                    content: "Logout",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.LogOut, {
                        onClick: async ()=>{
                            let err = await supabaseClient.auth.signOut();
                            console.log(err);
                            router.push("/");
                        },
                        className: "w-6 h-6 mx-auto mb-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;