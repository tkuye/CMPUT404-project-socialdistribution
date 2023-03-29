/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Inbox } from './Inbox';

export type PaginatedInboxList = {
    count?: number;
    type?: string;
    author?: string;
    items?: Array<Inbox>;
};

