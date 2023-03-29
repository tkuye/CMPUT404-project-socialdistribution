/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Post } from './Post';

export type PaginatedPostList = {
    count?: number;
    items?: Array<Post>;
};

