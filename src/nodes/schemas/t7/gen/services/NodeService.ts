/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeRetrieve } from '../models/NodeRetrieve';
import type { PaginatedNodeListList } from '../models/PaginatedNodeListList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NodeService {

    /**
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedNodeListList
     * @throws ApiError
     */
    public static nodeList(
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedNodeListList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/node/',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * Get public posts from another node'
     * @param nodeGetUrl
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedNodeListList
     * @throws ApiError
     */
    public static nodeList2(
        nodeGetUrl: string,
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedNodeListList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/node/{nodeGetURL}/',
            path: {
                'nodeGetURL': nodeGetUrl,
            },
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * Get an object from another node
     * @returns NodeRetrieve
     * @throws ApiError
     */
    public static nodeObjectRetrieve(): CancelablePromise<NodeRetrieve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/node/object/',
        });
    }

    /**
     * Post an object to a node's author's inboxes
     * @param requestBody
     * @returns NodeRetrieve
     * @throws ApiError
     */
    public static nodeObjectCreate(
        requestBody: NodeRetrieve,
    ): CancelablePromise<NodeRetrieve> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/node/object/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
