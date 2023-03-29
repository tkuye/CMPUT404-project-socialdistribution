/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SignupService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static signupList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/signup/',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static signupCreate(
        requestBody: {
            /**
             * username
             */
            username: string;
            /**
             * password
             */
            password: string;
            /**
             * displayName
             */
            displayName: string;
            /**
             * github
             */
            github?: string;
            /**
             * profileImage
             */
            profileImage?: any;
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
        /**
         * displayName
         */
        displayName: string;
        /**
         * github
         */
        github?: string;
        /**
         * profileImage
         */
        profileImage?: any;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signup/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
