/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentContentTypeEnum } from './CommentContentTypeEnum';

export type Comment = {
    readonly type: string;
    author: string;
    comment: string;
    contentType: CommentContentTypeEnum;
    readonly published: string;
    readonly id: string;
};

