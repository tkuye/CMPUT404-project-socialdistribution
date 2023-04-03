/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContextEnum } from './ContextEnum';

export type Like = {
    summary: string;
    readonly type: string;
    author: string;
    readonly object: string;
    '@context': ContextEnum;
};

