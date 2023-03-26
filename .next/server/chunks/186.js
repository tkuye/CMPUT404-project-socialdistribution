"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 9340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class API {
    constructor(apiURL, axiosConfig, nodeType = "local"){
        this.axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
            baseURL: apiURL,
            ...axiosConfig
        });
        this.nodeType = nodeType;
    }
    getNodeType() {
        return this.nodeType;
    }
    async getAuthors(page = 0, size = 25, query = "") {
        try {
            const results = await this.axiosInstance.get(`/authors/?page=${page}&size=${size}&query=${query}`);
            if (results.data.items === undefined) {
                throw new Error("items is undefined");
            }
            return results.data;
        } catch (e) {
            console.error(e);
            return {
                type: "authors",
                items: []
            };
        }
    }
    async isPostLiked(postId, authorId) {
        try {
            const result = await this.axiosInstance.get(`/authors/${authorId}/liked`);
            const likes = result.data.items;
            for (const like of likes){
                if (like.object.includes(postId)) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    async isCommentLiked(commentId, authorId) {
        try {
            const result = await this.axiosInstance.get(`/authors/${authorId}/liked`);
            const likes = result.data.items;
            for (const like of likes){
                if (like.object.includes(commentId)) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    async getAuthor(authorId) {
        try {
            const result = await this.axiosInstance.get(`/authors/${authorId}`);
            return result.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    async createAuthor(author) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            await this.axiosInstance.post(`/authors/`, author);
        } catch (e) {
            console.log(e);
        }
    }
    async updateAuthor(authorId, data) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            const result = await this.axiosInstance.put(`/authors/${authorId}`, data);
            return result.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    async getFollowers(authorId) {
        try {
            const results = await this.axiosInstance.get(`/authors/${authorId}/followers`);
            if (results.data.items === undefined) {
                throw new Error("items is undefined");
            }
            return results.data;
        } catch (e) {
            console.error(e);
            return {
                type: "authors",
                items: []
            };
        }
    }
    async addFollower(authorId, foreignAuthorId) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            await this.axiosInstance.put(`/authors/${authorId}/followers/${foreignAuthorId}`, {
                status: "friends"
            });
            let actor = await this.getAuthor(foreignAuthorId);
            let object = await this.getAuthor(authorId);
            if (actor && object) {
                await this.sendToInbox(foreignAuthorId, {
                    type: "follow",
                    summary: `${object.displayName} accepted your follow request`,
                    actor: actor,
                    object: object
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    async checkFollowerStatus(authorId, foreignAuthorId) {
        try {
            const result = await this.axiosInstance.get(`/authors/${authorId}/followers/${foreignAuthorId}`);
            return result.data;
        } catch (e) {
            console.error(e);
            return "not_friends";
        }
    }
    async removeFollower(authorId, foreignAuthorId) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            console.log(authorId, foreignAuthorId);
            return await this.axiosInstance.delete(`/authors/${authorId}/followers/${foreignAuthorId}`);
        } catch (e) {
            console.log(e);
        }
    }
    async sendFollowRequest(authorTo, authorFrom) {
        try {
            let authorId = authorTo.id.split("/").pop();
            await this.sendToInbox(authorId || "", {
                type: "follow",
                summary: `${authorFrom.displayName} wants to follow you`,
                actor: authorFrom,
                object: authorTo
            });
        } catch (e) {
            console.log(e);
        }
    }
    async getPost(authorId, postId) {
        try {
            const result = await this.axiosInstance.get(`/authors/${authorId}/posts/${postId}`);
            return result.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    async deletePost(authorId, postId) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            return await this.axiosInstance.delete(`/authors/${authorId}/posts/${postId}`);
        } catch (e) {
            console.log(e);
        }
    }
    async getPosts(authorId, page = 1, size = 10) {
        try {
            const results = await this.axiosInstance.get(`/authors/${authorId}/posts/?page=${page}&size=${size}`);
            if (results.data.items === undefined) {
                throw new Error("items is undefined");
            }
            return results.data;
        } catch (e) {
            console.error(e);
            return {
                type: "posts",
                items: []
            };
        }
    }
    async alertNewPost(authorId, post) {
        // Goes to everyones inbox
        let followers = await this.getFollowers(authorId);
        let followerList = followers.items;
        Promise.all(followerList.map(async (follower)=>{
            let followerId = follower.id.split("/").pop();
            if (post.visibility === "UNLISTED") {
                return;
            } else if (post.visibility === "PRIVATE") {
                let status = await this.checkFollowerStatus(followerId || "", authorId);
                if (status == "true_friends") {
                    await this.sendToInbox(followerId || "", post);
                }
            } else {
                await this.sendToInbox(followerId || "", post);
            }
        }));
        // Add to author's inbox
        await this.sendToInbox(authorId, post);
    }
    async updatePost(authorId, postId, post) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        const result = await this.axiosInstance.put(`/authors/${authorId}/posts/${postId}`, post);
        return result.data;
    }
    async createPost(authorId, post) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            let result = await this.axiosInstance.post(`/authors/${authorId}/posts/`, post);
            return result.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    async getComments(authorId, postId, page = 0, size = 10) {
        try {
            const results = await this.axiosInstance.get(`/authors/${authorId}/posts/${postId}/comments?page=${page}&size=${size}`);
            if (results.data.comments === undefined) {
                throw new Error("items is undefined");
            }
            return results.data;
        } catch (e) {
            console.error(e);
            return {
                type: "comments",
                page: 0,
                size: 0,
                comments: [],
                post: "",
                id: ""
            };
        }
    }
    async createComment(authorId, postId, comment) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            const result = await this.axiosInstance.post(`/authors/${authorId}/posts/${postId}/comments`, comment);
            await this.sendToInbox(authorId || "", comment);
            return result.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    async createLike(authorId, post, authorFrom) {
        try {
            await this.sendToInbox(authorId, {
                "@context": "https://www.w3.org/ns/activitystreams",
                "summary": `${authorFrom.displayName} liked your post: ${post.title}`,
                type: "like",
                author: authorFrom,
                object: post.id
            });
        } catch (e) {
            console.log(e);
        }
    }
    async createCommentLike(authorId, comment, authorFrom) {
        try {
            await this.sendToInbox(authorId, {
                "@context": "https://www.w3.org/ns/activitystreams",
                "summary": `${authorFrom.displayName} liked your comment`,
                type: "like",
                author: authorFrom,
                object: comment?.id || ""
            });
        } catch (e) {
            console.log(e);
        }
    }
    async getLiked(authorId) {
        try {
            const results = await this.axiosInstance.get(`/authors/${authorId}/liked`);
            return results.data;
        } catch (e) {
            return {
                type: "likes",
                items: []
            };
        }
    }
    async sendToInbox(authorId, activity) {
        const result = await this.axiosInstance.post(`/authors/${authorId}/inbox/`, activity);
        return result.data;
    }
    async getInbox(authorId) {
        if (this.nodeType === "remote") {
            throw new Error("Remote nodes do not support this operation");
        }
        try {
            const results = await this.axiosInstance.get(`/authors/${authorId}/inbox/`);
            return results.data;
        } catch (e) {
            return {
                type: "inbox",
                author: "",
                items: []
            };
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9340);
/* harmony import */ var _node_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const LocalNode = new _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("https://sd16-api.herokuapp.com/service" || 0, {
    auth: {
        username: "admin" || 0,
        password: "123" || 0
    },
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, "local");
const Team7 = new _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("https://sd7-api.herokuapp.com/api", {
    auth: {
        username: "node01" || 0,
        password: "P*ssw0rd!" || 0
    },
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true
    }
}, "remote");
const Team17 = new _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("https://social-distribution-w23-t17.herokuapp.com", {
    auth: {
        username: "remote-user-t16" || 0,
        password: "Th!sIsF1ne" || 0
    },
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true
    }
}, "remote");
const Team12 = new _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("https://cmput404-project-data.herokuapp.com/server", {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true
    }
}, "remote");
const nodeManager = new _node_manager__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
    local: LocalNode,
    team12: Team12,
    team7: Team7,
    team17: Team17
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NodeManager {
    constructor(nodes){
        this.nodes = nodes;
    }
    addNode(node) {
        this.nodes = {
            ...this.nodes,
            ...node
        };
    }
    removeNode(nodeId) {
        delete this.nodes[nodeId];
    }
    getNodes() {
        return this.nodes;
    }
    async checkAuthorExists(authorId) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                if (await node.getAuthor(authorId)) {
                    return true;
                }
            }
        }
        return false;
    }
    async getAuthor(authorId, nodeId = "all") {
        if (nodeId === "all") {
            for (const node of Object.values(this.nodes)){
                const author = await node.getAuthor(authorId);
                if (author) {
                    return author;
                }
            }
            return null;
        } else {
            return await this.nodes[nodeId].getAuthor(authorId);
        }
    }
    async createAuthor(author) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.createAuthor(author);
            }
        }
        throw new Error("No local node found");
    }
    async getAuthors(page = 0, size = 25, nodeId = "all", query = "") {
        if (nodeId === "all") {
            let authors = [];
            for (const node of Object.values(this.nodes)){
                const results = await node.getAuthors(page, size, query);
                authors = authors.concat(results.items);
            }
            return {
                type: "authors",
                items: authors
            };
        } else {
            return await this.nodes[nodeId].getAuthors(page, size, query);
        }
    }
    async updateAuthor(authorId, data) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.updateAuthor(authorId, data);
            }
        }
        throw new Error("No local node found");
    }
    async getFollowers(authorId, nodeId = "all") {
        if (nodeId === "all") {
            let authors = [];
            for (const node of Object.values(this.nodes)){
                const results = await node.getFollowers(authorId);
                authors = authors.concat(results.items);
            }
            return {
                type: "authors",
                items: authors
            };
        } else {
            return await this.nodes[nodeId].getFollowers(authorId);
        }
    }
    async isPostLiked(postId, authorId) {
        for (const node of Object.values(this.nodes)){
            const result = await node.isPostLiked(postId, authorId);
            if (result) {
                return true;
            }
        }
        return false;
    }
    async isCommentLiked(commentId, authorId) {
        for (const node of Object.values(this.nodes)){
            const result = await node.isCommentLiked(commentId, authorId);
            if (result) {
                return true;
            }
        }
        return false;
    }
    async alertNewPost(authorId, post) {
        for (const node of Object.values(this.nodes)){
            return await node.alertNewPost(authorId, post);
        }
    }
    async addFollower(authorId, foreignAuthorId) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.addFollower(authorId, foreignAuthorId);
            }
        }
        throw new Error("No local node found");
    }
    async checkFollowerStatus(authorId, foreignAuthorId) {
        for (const node of Object.values(this.nodes)){
            const result = await node.checkFollowerStatus(authorId, foreignAuthorId);
            return result;
        }
        return "";
    }
    async removeFollower(authorId, foreignAuthorId) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.removeFollower(authorId, foreignAuthorId);
            }
        }
        throw new Error("No local node found");
    }
    async sendFollowRequest(authorTo, authorFrom) {
        for (const node of Object.values(this.nodes)){
            try {
                return await node.sendFollowRequest(authorTo, authorFrom);
            } catch (e) {
                console.log(e);
            }
        }
        throw new Error("No local node found");
    }
    async getPost(authorId, postId, nodeId = "all") {
        if (nodeId === "all") {
            for (const node of Object.values(this.nodes)){
                const post = await node.getPost(authorId, postId);
                if (post) {
                    return post;
                }
            }
            return null;
        } else {
            return await this.nodes[nodeId].getPost(authorId, postId);
        }
    }
    async getPosts(authorId, page = 0, size = 25, nodeId = "all") {
        if (nodeId === "all") {
            let posts = [];
            for (const node of Object.values(this.nodes)){
                const results = await node.getPosts(authorId, page, size);
                posts = posts.concat(results.items);
            }
            return {
                type: "posts",
                items: posts
            };
        } else {
            return await this.nodes[nodeId].getPosts(authorId, page, size);
        }
    }
    async createPost(authorId, post) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.createPost(authorId, post);
            }
        }
        throw new Error("No local node found");
    }
    async updatePost(authorId, postId, post) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.updatePost(authorId, postId, post);
            }
        }
        throw new Error("No local node found");
    }
    async deletePost(authorId, postId) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.deletePost(authorId, postId);
            }
        }
        throw new Error("No local node found");
    }
    async getComments(authorId, postId, page = 0, size = 25, nodeId = "all") {
        if (nodeId === "all") {
            let comments = [];
            let post = "";
            let id = "";
            for (const node of Object.values(this.nodes)){
                const results = await node.getComments(authorId, postId, page, size);
                post = results.post;
                id = results.id;
                comments = comments.concat(results.comments);
            }
            return {
                type: "comments",
                comments: comments,
                page: page,
                post: post,
                size: size,
                id: id
            };
        } else {
            return await this.nodes[nodeId].getComments(authorId, postId, page, size);
        }
    }
    async createComment(authorId, postId, comment) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.createComment(authorId, postId, comment);
            }
        }
        throw new Error("No local node found");
    }
    async createLike(authorId, post, authorFrom) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.createLike(authorId, post, authorFrom);
            }
        }
        throw new Error("No local node found");
    }
    async createCommentLike(authorId, comment, authorFrom) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.createCommentLike(authorId, comment, authorFrom);
            }
        }
        throw new Error("No local node found");
    }
    async getLiked(authorId, nodeId = "all") {
        if (nodeId === "all") {
            let likes = [];
            for (const node of Object.values(this.nodes)){
                const results = await node.getLiked(authorId);
                likes = likes.concat(results.items);
            }
            return {
                type: "likes",
                items: likes
            };
        } else {
            return await this.nodes[nodeId].getLiked(authorId);
        }
    }
    async getInbox(authorId) {
        for (const node of Object.values(this.nodes)){
            if (node.getNodeType() === "local") {
                return await node.getInbox(authorId);
            }
        }
        throw new Error("No local node found");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeManager);


/***/ })

};
;