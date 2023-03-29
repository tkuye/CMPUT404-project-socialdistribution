/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MyTokenObtainPair } from '../models/MyTokenObtainPair';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { TokenVerify } from '../models/TokenVerify';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenService {

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     * @param requestBody
     * @returns MyTokenObtainPair
     * @throws ApiError
     */
    public static tokenCreate(
        requestBody: MyTokenObtainPair,
    ): CancelablePromise<MyTokenObtainPair> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param requestBody
     * @returns TokenRefresh
     * @throws ApiError
     */
    public static tokenRefreshCreate(
        requestBody: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token/refresh/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     * @param requestBody
     * @returns TokenVerify
     * @throws ApiError
     */
    public static tokenVerifyCreate(
        requestBody: TokenVerify,
    ): CancelablePromise<TokenVerify> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token/verify/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
