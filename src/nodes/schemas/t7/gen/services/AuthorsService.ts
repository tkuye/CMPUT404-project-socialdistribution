/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { ExistingAuthor } from '../models/ExistingAuthor';
import type { Follower } from '../models/Follower';
import type { Inbox } from '../models/Inbox';
import type { NewAuthor } from '../models/NewAuthor';
import type { PaginatedCommentList } from '../models/PaginatedCommentList';
import type { PaginatedFollowerList } from '../models/PaginatedFollowerList';
import type { PaginatedInboxList } from '../models/PaginatedInboxList';
import type { PaginatedLikeList } from '../models/PaginatedLikeList';
import type { PaginatedNewAuthorList } from '../models/PaginatedNewAuthorList';
import type { PaginatedPostList } from '../models/PaginatedPostList';
import type { PatchedPost } from '../models/PatchedPost';
import type { Post } from '../models/Post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorsService {

    /**
     * GET request that returns list of authors ordered by username
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedNewAuthorList
     * @throws ApiError
     */
    public static authorsList(
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedNewAuthorList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * POST request that creates a new author
     * @param requestBody
     * @returns NewAuthor
     * @throws ApiError
     */
    public static authorsCreate(
        requestBody: NewAuthor,
    ): CancelablePromise<NewAuthor> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedFollowerList
     * @throws ApiError
     */
    public static authorsFollowersList(
        authorUuid: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedFollowerList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/followers/',
            path: {
                'author_uuid': authorUuid,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * @param authorUuid
     * @param followerNodeId
     * @returns Follower
     * @throws ApiError
     */
    public static authorsFollowersRetrieve(
        authorUuid: string,
        followerNodeId: string,
    ): CancelablePromise<Follower> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/followers/{follower_node_id}/',
            path: {
                'author_uuid': authorUuid,
                'follower_node_id': followerNodeId,
            },
        });
    }

    /**
     * @param authorUuid
     * @param followerNodeId
     * @param requestBody
     * @returns Follower
     * @throws ApiError
     */
    public static authorsFollowersUpdate(
        authorUuid: string,
        followerNodeId: string,
        requestBody?: Follower,
    ): CancelablePromise<Follower> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/authors/{author_uuid}/followers/{follower_node_id}/',
            path: {
                'author_uuid': authorUuid,
                'follower_node_id': followerNodeId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param followerNodeId
     * @returns void
     * @throws ApiError
     */
    public static authorsFollowersDestroy(
        authorUuid: string,
        followerNodeId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/authors/{author_uuid}/followers/{follower_node_id}/',
            path: {
                'author_uuid': authorUuid,
                'follower_node_id': followerNodeId,
            },
        });
    }

    /**
     * GET Paginated list of recent author_uuid's inbox things
     * @param authorUuid
     * @param count
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedInboxList
     * @throws ApiError
     */
    public static authorsInboxList(
        authorUuid: string,
        count?: boolean,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedInboxList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/inbox/',
            path: {
                'author_uuid': authorUuid,
            },
            query: {
                'count': count,
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * POST Add new object to author's inbox
     * @param authorUuid
     * @param requestBody
     * @returns Inbox
     * @throws ApiError
     */
    public static authorsInboxCreate(
        authorUuid: string,
        requestBody: Inbox,
    ): CancelablePromise<Inbox> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/{author_uuid}/inbox/',
            path: {
                'author_uuid': authorUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @returns void
     * @throws ApiError
     */
    public static authorsInboxDestroy(
        authorUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/authors/{author_uuid}/inbox/',
            path: {
                'author_uuid': authorUuid,
            },
        });
    }

    /**
     * GET posts associated with author_uuid
     * @param authorUuid
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedPostList
     * @throws ApiError
     */
    public static authorsPostsList(
        authorUuid: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedPostList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/',
            path: {
                'author_uuid': authorUuid,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * @param authorUuid
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static authorsPostsCreate(
        authorUuid: string,
        requestBody: Post,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/{author_uuid}/posts/',
            path: {
                'author_uuid': authorUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param id
     * @returns Post
     * @throws ApiError
     */
    public static authorsPostsRetrieve(
        authorUuid: string,
        id: string,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/{id}/',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
        });
    }

    /**
     * @param authorUuid
     * @param id
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static postPostUpdate(
        authorUuid: string,
        id: string,
        requestBody: Post,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/{author_uuid}/posts/{id}/',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param id
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static postPutCreateUpdate(
        authorUuid: string,
        id: string,
        requestBody: Post,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/authors/{author_uuid}/posts/{id}/',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param id
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static authorsPostsPartialUpdate(
        authorUuid: string,
        id: string,
        requestBody?: PatchedPost,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/authors/{author_uuid}/posts/{id}/',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authorUuid
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static authorsPostsDestroy(
        authorUuid: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/authors/{author_uuid}/posts/{id}/',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
        });
    }

    /**
     * Get an object from another node
     * @param authorUuid
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static authorsPostsImageRetrieve(
        authorUuid: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/{id}/image',
            path: {
                'author_uuid': authorUuid,
                'id': id,
            },
        });
    }

    /**
     * GET a list of comments associated with post_uuid
     * @param authorUuid
     * @param postUuid
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedCommentList
     * @throws ApiError
     */
    public static authorsPostsCommentsList(
        authorUuid: string,
        postUuid: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedCommentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/{post_uuid}/comments/',
            path: {
                'author_uuid': authorUuid,
                'post_uuid': postUuid,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * Create a new comment on post post_uuid
     * @param authorUuid
     * @param postUuid
     * @param requestBody
     * @returns Comment
     * @throws ApiError
     */
    public static authorsPostsCommentsCreate(
        authorUuid: string,
        postUuid: string,
        requestBody: Comment,
    ): CancelablePromise<Comment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/{author_uuid}/posts/{post_uuid}/comments/',
            path: {
                'author_uuid': authorUuid,
                'post_uuid': postUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * A view for getting a list of likes on a comment
     * @param authorUuid
     * @param commentUuid
     * @param postUuid
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedLikeList
     * @throws ApiError
     */
    public static authorsPostsCommentsLikesList(
        authorUuid: string,
        commentUuid: string,
        postUuid: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedLikeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/{post_uuid}/comments/{comment_uuid}/likes/',
            path: {
                'author_uuid': authorUuid,
                'comment_uuid': commentUuid,
                'post_uuid': postUuid,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * A view for getting a list of likes on a post
     * @param authorUuid
     * @param postUuid
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedLikeList
     * @throws ApiError
     */
    public static authorsPostsLikesList(
        authorUuid: string,
        postUuid: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedLikeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{author_uuid}/posts/{post_uuid}/likes/',
            path: {
                'author_uuid': authorUuid,
                'post_uuid': postUuid,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * GET request that returns a specific user
     * @param id
     * @returns ExistingAuthor
     * @throws ApiError
     */
    public static authorsRetrieve(
        id: string,
    ): CancelablePromise<ExistingAuthor> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authors/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * POST request that updates an author's profile
     * @param id
     * @param requestBody
     * @returns ExistingAuthor
     * @throws ApiError
     */
    public static authorsUpdate(
        id: string,
        requestBody?: ExistingAuthor,
    ): CancelablePromise<ExistingAuthor> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authors/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
