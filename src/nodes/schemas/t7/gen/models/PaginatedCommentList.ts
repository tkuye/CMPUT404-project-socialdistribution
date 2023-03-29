/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment';

export type PaginatedCommentList = {
    count?: number;
    type?: string;
    page?: number;
    size?: number;
    post?: string;
    id?: string;
    comments?: Array<Comment>;
};

