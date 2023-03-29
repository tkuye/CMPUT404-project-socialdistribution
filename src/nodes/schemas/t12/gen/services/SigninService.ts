/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SigninService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static signinList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/signin/',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static signinCreate(
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
            url: '/signin/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
