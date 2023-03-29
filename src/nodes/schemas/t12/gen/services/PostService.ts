/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostService {

    /**
     * Don't use this get, this is just for testing.
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsLikeRead(
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/authors/{userId}/like/{postId}',
            path: {
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Create a like to specified post, no data required.
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsLikeCreate(
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/authors/{userId}/like/{postId}',
            path: {
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Don't use this get, this is just for testing.
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCreateList(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/authors/{userId}/posts/create',
            path: {
                'userId': userId,
            },
        });
    }

    /**
     * Create a new post.
     * @param userId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCreateCreate(
        userId: string,
        requestBody: {
            /**
             * Title is required
             */
            title: string;
            description?: string;
            /**
             * Content is required
             */
            content: string;
            visibility?: string;
            content_type?: string;
            categories?: string;
            /**
             * Image is optional(image post or text post)
             */
            image: any;
        },
    ): CancelablePromise<{
        /**
         * Title is required
         */
        title: string;
        description?: string;
        /**
         * Content is required
         */
        content: string;
        visibility?: string;
        content_type?: string;
        categories?: string;
        /**
         * Image is optional(image post or text post)
         */
        image: any;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/authors/{userId}/posts/create',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Don't use this get, this is just for testing.
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCommentList(
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/authors/{userId}/posts/{postId}/comment',
            path: {
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Create a new comment on the specified post.
     * @param postId
     * @param userId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCommentCreate(
        postId: string,
        userId: string,
        requestBody: {
            /**
             * Comment text
             */
            comment: string;
            /**
             * Content type of the comment
             */
            content_type?: string;
        },
    ): CancelablePromise<{
        /**
         * Comment text
         */
        comment: string;
        /**
         * Content type of the comment
         */
        content_type?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/authors/{userId}/posts/{postId}/comment',
            path: {
                'postId': postId,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Don't use this get, this is just for testing.
     * @param commentId
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCommentsLikesList(
        commentId: string,
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/authors/{userId}/posts/{postId}/comments/{commentId}/likes',
            path: {
                'commentId': commentId,
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Create a like to specified comment under specified post, no data required.
     * @param commentId
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsPostsCommentsLikesCreate(
        commentId: string,
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/authors/{userId}/posts/{postId}/comments/{commentId}/likes',
            path: {
                'commentId': commentId,
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Don't use this get, this is just for testing.
     * @param postId
     * @param userId
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsShareRead(
        postId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/authors/{userId}/share/{postId}',
            path: {
                'postId': postId,
                'userId': userId,
            },
        });
    }

    /**
     * Share post from current author to another author.
     * @param postId
     * @param userId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static postAuthorsShareCreate(
        postId: string,
        userId: string,
        requestBody: {
            /**
             * author uuid want receive this share
             */
            sendTo: string;
        },
    ): CancelablePromise<{
        /**
         * author uuid want receive this share
         */
        sendTo: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/authors/{userId}/share/{postId}',
            path: {
                'postId': postId,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
