import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "./schema";
import {Buffer} from 'buffer';
const fetcher = Fetcher.for<paths>();

if (!globalThis.fetch) {
    globalThis.fetch = fetch as any
    globalThis.Headers = Headers as any
    globalThis.Request = Request as any
    globalThis.Response = Response as any
}

fetcher.configure({
    baseUrl: process.env.NEXT_PUBLIC_T12_API_URL || 'https://cmput404-project-data.herokuapp.com',
    init:{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_T12_UNAME}:${process.env.NEXT_PUBLIC_T12_PW}`).toString('base64'),
        }
    }
});

const Inbox = fetcher.path('/service/authors/{id}/inbox').method('post').create();

const getPost = fetcher.path('/service/authors/{id}/posts/{postsId}/').method('get').create();

const getPosts = fetcher.path('/service/authors/{id}/posts/').method('get').create();

const getAuthor = fetcher.path('/service/authors/{id}/').method('get').create();

const getAuthors = fetcher.path('/service/authors/').method('get').create();

const getFollowers = fetcher.path('/service/authors/{id}/followers/').method('get').create();

const getComments = fetcher.path('/service/authors/{id}/posts/{postsId}/comments').method('get').create();

export const API = {
    Inbox,
    getPost,
    getPosts,
    getAuthor,
    getAuthors,
    getFollowers,
    getComments,
}




