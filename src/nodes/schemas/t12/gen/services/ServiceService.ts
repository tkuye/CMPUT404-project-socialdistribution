/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ServiceService {

    /**
     * Get all authors' informations.
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/',
        });
    }

    /**
     * Get informations for specific author.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsRead(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify author's information.
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsCreate(
        id: string,
        requestBody: {
            /**
             * Github URL
             */
            github: string;
            /**
             * Profile Image URL
             */
            profileImage: string;
            /**
             * Host URL
             */
            host: string;
            /**
             * Author URL
             */
            url: string;
        },
    ): CancelablePromise<{
        /**
         * Github URL
         */
        github: string;
        /**
         * Profile Image URL
         */
        profileImage: string;
        /**
         * Host URL
         */
        host: string;
        /**
         * Author URL
         */
        url: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service/authors/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all comments liked by specific author.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsCommentsLikedList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/comments/liked',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all the likes for a specific comment.
     * @param commentId
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsCommentsLikesList(
        commentId: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/comments/{commentId}/likes',
            path: {
                'commentId': commentId,
                'id': id,
            },
        });
    }

    /**
     * Don't use this GET, use getFollowers instead.
     * @param foreignPk
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowRequestsRead(
        foreignPk: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/followRequests/{foreignPk}',
            path: {
                'foreignPk': foreignPk,
                'id': id,
            },
        });
    }

    /**
     * Create a follow request current author.
     * @param foreignPk
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowRequestsCreate(
        foreignPk: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service/authors/{id}/followRequests/{foreignPk}',
            path: {
                'foreignPk': foreignPk,
                'id': id,
            },
        });
    }

    /**
     * Get all the followers taht follow current user.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowersList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/followers/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get information of a specific follower.
     * @param foreignPk
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowersRead(
        foreignPk: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/followers/{foreignPk}',
            path: {
                'foreignPk': foreignPk,
                'id': id,
            },
        });
    }

    /**
     * Add a new following relation, make sure the user send out follow request put after /followers/author_uuid.
     * @param foreignPk
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowersUpdate(
        foreignPk: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/service/authors/{id}/followers/{foreignPk}',
            path: {
                'foreignPk': foreignPk,
                'id': id,
            },
        });
    }

    /**
     * Delete a following relation.
     * @param foreignPk
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static serviceAuthorsFollowersDelete(
        foreignPk: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/service/authors/{id}/followers/{foreignPk}',
            path: {
                'foreignPk': foreignPk,
                'id': id,
            },
        });
    }

    /**
     * Get all the users followed by current user.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsFollowingList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/following/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all the posts, comments, follow requests and likes in specific author's inbox.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsInboxList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/inbox',
            path: {
                'id': id,
            },
        });
    }

    /**
     * ###attention: only followRequest is valid now.### Create posts or comments or follow requests or likes to specific author's inbox.
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsInboxCreate(
        id: string,
        requestBody: {
            followRequest?: {
                /**
                 * Type of the object, post/follow/like/comment.
                 */
                type: string;
                /**
                 * Summary of the follow.
                 */
                summary: string | null;
                author: {
                    /**
                     * Type of the object, author.
                     */
                    type?: string;
                    /**
                     * author.id
                     */
                    id: string;
                    /**
                     * author.url
                     */
                    url: string;
                    /**
                     * author.host
                     */
                    host: string;
                    /**
                     * author.displayname
                     */
                    displayName: string;
                    /**
                     * author.github
                     */
                    github: string;
                    /**
                     * author.profileimage
                     */
                    profileImage: string | null;
                };
            };
        },
    ): CancelablePromise<{
        followRequest?: {
            /**
             * Type of the object, post/follow/like/comment.
             */
            type: string;
            /**
             * Summary of the follow.
             */
            summary: string | null;
            author: {
                /**
                 * Type of the object, author.
                 */
                type?: string;
                /**
                 * author.id
                 */
                id: string;
                /**
                 * author.url
                 */
                url: string;
                /**
                 * author.host
                 */
                host: string;
                /**
                 * author.displayname
                 */
                displayName: string;
                /**
                 * author.github
                 */
                github: string;
                /**
                 * author.profileimage
                 */
                profileImage: string | null;
            };
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service/authors/{id}/inbox',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Clear inbox for specific author.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static serviceAuthorsInboxDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/service/authors/{id}/inbox',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all the posts liked by specific author.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsLikedList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/liked',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get posts create by specific author.
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsList(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a new post, don't use this one, was used for test.
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsCreate(
        id: string,
        requestBody: {
            /**
             * Title of the post
             */
            title: string;
            /**
             * Source of the post
             */
            source: string;
            /**
             * Origin of the post
             */
            origin: string;
            /**
             * Description of the post
             */
            description: string;
            /**
             * Content type of the post
             */
            contentType: string;
            /**
             * Content of the post
             */
            content: string;
            /**
             * Categories of the post
             */
            categories: string;
            /**
             * Visibility of the post
             */
            visibility: string;
        },
    ): CancelablePromise<{
        /**
         * Title of the post
         */
        title: string;
        /**
         * Source of the post
         */
        source: string;
        /**
         * Origin of the post
         */
        origin: string;
        /**
         * Description of the post
         */
        description: string;
        /**
         * Content type of the post
         */
        contentType: string;
        /**
         * Content of the post
         */
        content: string;
        /**
         * Categories of the post
         */
        categories: string;
        /**
         * Visibility of the post
         */
        visibility: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service/authors/{id}/posts/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a specific post.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsRead(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/{postsId}/',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Update a specific post, non required.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsUpdate(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/service/authors/{id}/posts/{postsId}/',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Delete a specific post.
     * @param id
     * @param postsId
     * @returns void
     * @throws ApiError
     */
    public static serviceAuthorsPostsDelete(
        id: string,
        postsId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/service/authors/{id}/posts/{postsId}/',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Get all the comments of specific post.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsCommentsList(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/{postsId}/comments',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Post new comments. Don't use this one, just for test.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsCommentsCreate(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service/authors/{id}/posts/{postsId}/comments',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Get a specific comment.
     * @param commentId
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsCommentsRead(
        commentId: string,
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/{postsId}/comments/{commentId}',
            path: {
                'commentId': commentId,
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Get the image of a post.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsImageList(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/{postsId}/image',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Get all the likes for a specific post.
     * @param id
     * @param postsId
     * @returns any
     * @throws ApiError
     */
    public static serviceAuthorsPostsLikesList(
        id: string,
        postsId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/authors/{id}/posts/{postsId}/likes',
            path: {
                'id': id,
                'postsId': postsId,
            },
        });
    }

    /**
     * Get all public posts.
     * @returns any
     * @throws ApiError
     */
    public static servicePostsList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/posts/',
        });
    }

}
