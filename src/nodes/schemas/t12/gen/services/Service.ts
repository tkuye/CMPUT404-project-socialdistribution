/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Service {

    /**
     * @returns any
     * @throws ApiError
     */
    public static list(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static create(
        requestBody: {
            /**
             * username
             */
            username: string;
            /**
             * password
             */
            password: string;
        },
    ): CancelablePromise<{
        /**
         * username
         */
        username: string;
        /**
         * password
         */
        password: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
