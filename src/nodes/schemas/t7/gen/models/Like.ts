/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contextEnum } from './contextEnum';

export type Like = {
    summary: string;
    readonly type: string;
    author: string;
    readonly object: string;
    '@context': contextEnum;
};

