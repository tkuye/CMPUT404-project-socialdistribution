/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContextEnum } from './ContextEnum';
import type { InboxTypeEnum } from './InboxTypeEnum';

export type Inbox = {
    context?: ContextEnum;
    summary: string;
    type?: InboxTypeEnum;
    author: string;
    object: string;
};

