import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "./schema";
import {Buffer} from 'buffer';

if (!globalThis.fetch) {
    globalThis.fetch = fetch as any
    globalThis.Headers = Headers as any
    globalThis.Request = Request as any
    globalThis.Response = Response as any
}

const fetcher = Fetcher.for<paths>();

fetcher.configure({
    baseUrl:  process.env.NEXT_PUBLIC_T7_API_URL || 'https://sd7-api.herokuapp.com',
    
    init:{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_T7_UNAME}:${process.env.NEXT_PUBLIC_T7_PW}`).toString('base64'),
        }
    }
});

const Inbox = fetcher.path('/api/authors/{author_uuid}/inbox/').method('post').create();

const getPost = fetcher.path('/api/authors/{author_uuid}/posts/{id}/').method('get').create();

const getPosts = fetcher.path('/api/authors/{author_uuid}/posts/').method('get').create();

const getAuthor = fetcher.path('/api/authors/{id}/').method('get').create();

const getAuthors = fetcher.path('/api/authors/').method('get').create();

const getFollowers = fetcher.path('/api/authors/{author_uuid}/followers/').method('get').create();

const getComments = fetcher.path('/api/authors/{author_uuid}/posts/{post_uuid}/comments/').method('get').create();

export const API = {
    Inbox,
    getPost,
    getPosts,
    getAuthor,
    getAuthors,
    getFollowers,
    getComments,
}