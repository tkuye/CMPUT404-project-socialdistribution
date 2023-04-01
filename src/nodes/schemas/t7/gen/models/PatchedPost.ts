/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExistingAuthor } from './ExistingAuthor';
import type { PostContentTypeEnum } from './PostContentTypeEnum';
import type { VisibilityEnum } from './VisibilityEnum';

export type PatchedPost = {
    readonly type?: string;
    title?: string;
    readonly id?: string;
    origin?: string;
    source?: string;
    description?: string;
    contentType?: PostContentTypeEnum;
    content?: string;
    readonly author?: ExistingAuthor;
    readonly categories?: Array<any>;
    readonly commentCount?: number;
    readonly likeCount?: number;
    readonly comments?: string;
    readonly published?: string;
    /**
     * Who can view this post
     */
    visibility?: VisibilityEnum;
    /**
     * Does this post appear in authors streams
     */
    unlisted?: boolean;
    readonly rev?: number;
    readonly updated_at?: string;
};

