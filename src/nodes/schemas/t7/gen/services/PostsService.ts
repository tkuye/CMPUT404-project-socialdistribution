/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPostList } from '../models/PaginatedPostList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * GET a paginated list of all PUBLIC posts
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedPostList
     * @throws ApiError
     */
    public static postsList(
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedPostList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

}
