/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/authors/": {
    /** @description GET request that returns list of authors ordered by username */
    get: operations["authors_list"];
    /** @description POST request that creates a new author */
    post: operations["authors_create"];
  };
  "/api/authors/{author_uuid}/followers/": {
    get: operations["authors_followers_list"];
  };
  "/api/authors/{author_uuid}/followers/{follower_node_id}/": {
    get: operations["authors_followers_retrieve"];
    put: operations["authors_followers_update"];
    delete: operations["authors_followers_destroy"];
  };
  "/api/authors/{author_uuid}/inbox/": {
    /** @description GET Paginated list of recent author_uuid's inbox things */
    get: operations["authors_inbox_list"];
    /** @description POST Add new object to author's inbox */
    post: operations["authors_inbox_create"];
    delete: operations["authors_inbox_destroy"];
  };
  "/api/authors/{author_uuid}/posts/": {
    /** @description GET posts associated with author_uuid */
    get: operations["authors_posts_list"];
    post: operations["authors_posts_create"];
  };
  "/api/authors/{author_uuid}/posts/{id}/": {
    get: operations["authors_posts_retrieve"];
    put: operations["post_put_create_update"];
    post: operations["post_post_update"];
    delete: operations["authors_posts_destroy"];
    patch: operations["authors_posts_partial_update"];
  };
  "/api/authors/{author_uuid}/posts/{id}/image": {
    /** @description Get an object from another node */
    get: operations["authors_posts_image_retrieve"];
  };
  "/api/authors/{author_uuid}/posts/{post_uuid}/comments/": {
    /** @description GET a list of comments associated with post_uuid */
    get: operations["authors_posts_comments_list"];
    /** @description Create a new comment on post post_uuid */
    post: operations["authors_posts_comments_create"];
  };
  "/api/authors/{author_uuid}/posts/{post_uuid}/comments/{comment_uuid}/likes/": {
    /** @description A view for getting a list of likes on a comment */
    get: operations["authors_posts_comments_likes_list"];
  };
  "/api/authors/{author_uuid}/posts/{post_uuid}/likes/": {
    /** @description A view for getting a list of likes on a post */
    get: operations["authors_posts_likes_list"];
  };
  "/api/authors/{id}/": {
    /** @description GET request that returns a specific user */
    get: operations["authors_retrieve"];
    /** @description POST request that updates an author's profile */
    post: operations["authors_update"];
  };
  "/api/node/": {
    get: operations["node_list"];
  };
  "/api/node/{nodeGetURL}/": {
    /** @description Get public posts from another node' */
    get: operations["node_list_2"];
  };
  "/api/node/object/": {
    /** @description Get an object from another node */
    get: operations["node_object_retrieve"];
    /** @description Post an object to a node's author's inboxes */
    post: operations["node_object_create"];
  };
  "/api/posts/": {
    /** @description GET a paginated list of all PUBLIC posts */
    get: operations["posts_list"];
  };
  "/api/schema/": {
    /**
     * @description OpenApi3 schema for this API. Format can be selected via content negotiation.
     * 
     * - YAML: application/vnd.oai.openapi
     * - JSON: application/vnd.oai.openapi+json
     */
    get: operations["schema_retrieve"];
  };
  "/api/token/": {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     */
    post: operations["token_create"];
  };
  "/api/token/refresh/": {
    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     */
    post: operations["token_refresh_create"];
  };
  "/api/token/verify/": {
    /**
     * @description Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     */
    post: operations["token_verify_create"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @enum {string} */
    "@contextEnum": "https://www.w3.org/ns/activitystreams";
    Comment: {
      type: string;
      /** Format: uri */
      author: string;
      comment: string;
      contentType: components["schemas"]["CommentContentTypeEnum"];
      /** Format: date-time */
      published: string;
      /** Format: uri */
      id: string;
    };
    /** @enum {string} */
    CommentContentTypeEnum: "text/markdown" | "text/plain";
    /** @enum {string} */
    ContextEnum: "https://www.w3.org/ns/activitystreams";
    ExistingAuthor: {
      type: string;
      /** Format: uri */
      id: string;
      /** Format: uri */
      host: string;
      displayName?: string;
      /** Format: uri */
      url: string;
      /** Format: uri */
      github?: string;
      profileImage?: string;
    };
    Follower: {
      /** Format: uri */
      follower_node_id?: string;
    };
    Inbox: {
      /** @default https://www.w3.org/ns/activitystreams */
      context?: components["schemas"]["ContextEnum"];
      summary: string;
      type?: components["schemas"]["InboxTypeEnum"];
      /** Format: uri */
      author: string;
      /** Format: uri */
      object: string;
    };
    /** @enum {string} */
    InboxTypeEnum: "post" | "like" | "follow" | "comment";
    Like: {
      summary: string;
      type: string;
      /**
       * Who liked it 
       * Format: uri
       */
      author: string;
      /** Format: uri */
      object: string;
      "@context": components["schemas"]["@contextEnum"];
    };
    MyTokenObtainPair: {
      username: string;
      password: string;
    };
    NewAuthor: {
      type: string;
      /** Format: uri */
      id: string;
      /** Format: uri */
      host: string;
      displayName?: string;
      /** Format: uri */
      url: string;
      /** Format: uri */
      github?: string;
      profileImage?: string;
      username: string;
      password: string;
    };
    NodeList: {
      /** Format: uri */
      host: string;
      /** Format: uri */
      api_path: string;
      display_name: string;
    };
    NodeRetrieve: {
      /** Format: uri */
      url: string;
      type: components["schemas"]["NodeRetrieveTypeEnum"];
    };
    /** @enum {string} */
    NodeRetrieveTypeEnum: "post" | "like" | "follow" | "comment" | "author";
    PaginatedCommentList: {
      /** @example 10 */
      count?: number;
      /** @example comments */
      type?: string;
      /** @example 1 */
      page?: number;
      /** @example 5 */
      size?: number;
      /**
       * Format: uri 
       * @example http://api.example.com/api/authors/12345678-90ab-cdef-ghij-klmnopqrstuv/posts/12345608-90ac-cd3f-ghxj-klmnooorstuv
       */
      post?: string;
      /**
       * Format: uri 
       * @example http://api.example.com/api/authors/12345678-90ab-cdef-ghij-klmnopqrstuv/posts/12345608-90ac-cd3f-ghxj-klmnooorstuv/comments
       */
      id?: string;
      comments?: (components["schemas"]["Comment"])[];
    };
    PaginatedFollowerList: {
      /** @example 10 */
      count?: number;
      items?: (components["schemas"]["Follower"])[];
    };
    PaginatedInboxList: {
      /** @example 10 */
      count?: number;
      /** @example inbox */
      type?: string;
      /**
       * Format: uri 
       * @example http://api.example.com/api/authors/12345678-90ab-cdef-ghij-klmnopqrstuv
       */
      author?: string;
      items?: (components["schemas"]["Inbox"])[];
    };
    PaginatedLikeList: {
      /** @example 10 */
      count?: number;
      /** @example liked */
      type?: string;
      items?: (components["schemas"]["Like"])[];
    };
    PaginatedNewAuthorList: {
      /** @example 10 */
      count?: number;
      items?: (components["schemas"]["NewAuthor"])[];
    };
    PaginatedNodeListList: {
      /** @example 10 */
      count?: number;
      items?: (components["schemas"]["NodeList"])[];
    };
    PaginatedPostList: {
      /** @example 10 */
      count?: number;
      items?: (components["schemas"]["Post"])[];
    };
    PatchedPost: {
      type?: string;
      title?: string;
      /** Format: uri */
      id?: string;
      /** Format: uri */
      origin?: string;
      /** Format: uri */
      source?: string;
      description?: string;
      contentType?: components["schemas"]["PostContentTypeEnum"];
      content?: string;
      author?: components["schemas"]["ExistingAuthor"];
      categories?: readonly (Record<string, never>)[];
      commentCount?: number;
      likeCount?: number;
      /** Format: uri */
      comments?: string;
      /** Format: date-time */
      published?: string;
      /** @description Who can view this post */
      visibility?: components["schemas"]["VisibilityEnum"];
      /** @description Does this post appear in authors streams */
      unlisted?: boolean;
      rev?: number;
      /** Format: date-time */
      updated_at?: string;
    };
    Post: {
      type: string;
      title: string;
      /** Format: uri */
      id: string;
      /** Format: uri */
      origin?: string;
      /** Format: uri */
      source?: string;
      description?: string;
      contentType: components["schemas"]["PostContentTypeEnum"];
      content: string;
      author: components["schemas"]["ExistingAuthor"];
      categories: readonly (Record<string, never>)[];
      commentCount: number;
      likeCount: number;
      /** Format: uri */
      comments: string;
      /** Format: date-time */
      published: string;
      /** @description Who can view this post */
      visibility: components["schemas"]["VisibilityEnum"];
      /** @description Does this post appear in authors streams */
      unlisted?: boolean;
      rev: number;
      /** Format: date-time */
      updated_at: string;
    };
    /** @enum {string} */
    PostContentTypeEnum: "text/markdown" | "text/plain" | "application/base64" | "image/png;base64" | "image/jpeg;base64";
    TokenRefresh: {
      access: string;
      refresh: string;
    };
    TokenVerify: {
      token: string;
    };
    /** @enum {string} */
    VisibilityEnum: "FRIENDS" | "PUBLIC";
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** @description GET request that returns list of authors ordered by username */
  authors_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedNewAuthorList"];
        };
      };
    };
  };
  /** @description POST request that creates a new author */
  authors_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewAuthor"];
        "application/x-www-form-urlencoded": components["schemas"]["NewAuthor"];
        "multipart/form-data": components["schemas"]["NewAuthor"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["NewAuthor"];
        };
      };
    };
  };
  authors_followers_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedFollowerList"];
        };
      };
    };
  };
  authors_followers_retrieve: {
    parameters: {
      path: {
        author_uuid: string;
        follower_node_id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Follower"];
        };
      };
    };
  };
  authors_followers_update: {
    parameters: {
      path: {
        author_uuid: string;
        follower_node_id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Follower"];
        "application/x-www-form-urlencoded": components["schemas"]["Follower"];
        "multipart/form-data": components["schemas"]["Follower"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Follower"];
        };
      };
    };
  };
  authors_followers_destroy: {
    parameters: {
      path: {
        author_uuid: string;
        follower_node_id: string;
      };
    };
    responses: {
      /** @description No response body */
      204: never;
    };
  };
  /** @description GET Paginated list of recent author_uuid's inbox things */
  authors_inbox_list: {
    parameters: {
      query: {
        count?: boolean;
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedInboxList"];
        };
      };
    };
  };
  /** @description POST Add new object to author's inbox */
  authors_inbox_create: {
    parameters: {
      path: {
        author_uuid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Inbox"];
        "application/x-www-form-urlencoded": components["schemas"]["Inbox"];
        "multipart/form-data": components["schemas"]["Inbox"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["Inbox"];
        };
      };
    };
  };
  authors_inbox_destroy: {
    parameters: {
      path: {
        author_uuid: string;
      };
    };
    responses: {
      /** @description No response body */
      204: never;
    };
  };
  /** @description GET posts associated with author_uuid */
  authors_posts_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedPostList"];
        };
      };
    };
  };
  authors_posts_create: {
    parameters: {
      path: {
        author_uuid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Post"];
        "application/x-www-form-urlencoded": components["schemas"]["Post"];
        "multipart/form-data": components["schemas"]["Post"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
  authors_posts_retrieve: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
  post_put_create_update: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Post"];
        "application/x-www-form-urlencoded": components["schemas"]["Post"];
        "multipart/form-data": components["schemas"]["Post"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
  post_post_update: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Post"];
        "application/x-www-form-urlencoded": components["schemas"]["Post"];
        "multipart/form-data": components["schemas"]["Post"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
  authors_posts_destroy: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    responses: {
      /** @description No response body */
      204: never;
    };
  };
  authors_posts_partial_update: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PatchedPost"];
        "application/x-www-form-urlencoded": components["schemas"]["PatchedPost"];
        "multipart/form-data": components["schemas"]["PatchedPost"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
  /** @description Get an object from another node */
  authors_posts_image_retrieve: {
    parameters: {
      path: {
        author_uuid: string;
        id: string;
      };
    };
    responses: {
      /** @description No response body */
      200: never;
    };
  };
  /** @description GET a list of comments associated with post_uuid */
  authors_posts_comments_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
        post_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedCommentList"];
        };
      };
    };
  };
  /** @description Create a new comment on post post_uuid */
  authors_posts_comments_create: {
    parameters: {
      path: {
        author_uuid: string;
        post_uuid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Comment"];
        "application/x-www-form-urlencoded": components["schemas"]["Comment"];
        "multipart/form-data": components["schemas"]["Comment"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["Comment"];
        };
      };
    };
  };
  /** @description A view for getting a list of likes on a comment */
  authors_posts_comments_likes_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
        comment_uuid: string;
        post_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedLikeList"];
        };
      };
    };
  };
  /** @description A view for getting a list of likes on a post */
  authors_posts_likes_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        author_uuid: string;
        post_uuid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedLikeList"];
        };
      };
    };
  };
  /** @description GET request that returns a specific user */
  authors_retrieve: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ExistingAuthor"];
        };
      };
    };
  };
  /** @description POST request that updates an author's profile */
  authors_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ExistingAuthor"];
        "application/x-www-form-urlencoded": components["schemas"]["ExistingAuthor"];
        "multipart/form-data": components["schemas"]["ExistingAuthor"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ExistingAuthor"];
        };
      };
    };
  };
  node_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedNodeListList"];
        };
      };
    };
  };
  /** @description Get public posts from another node' */
  node_list_2: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
      path: {
        nodeGetURL: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedNodeListList"];
        };
      };
    };
  };
  /** @description Get an object from another node */
  node_object_retrieve: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["NodeRetrieve"];
        };
      };
    };
  };
  /** @description Post an object to a node's author's inboxes */
  node_object_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NodeRetrieve"];
        "application/x-www-form-urlencoded": components["schemas"]["NodeRetrieve"];
        "multipart/form-data": components["schemas"]["NodeRetrieve"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["NodeRetrieve"];
        };
      };
    };
  };
  /** @description GET a paginated list of all PUBLIC posts */
  posts_list: {
    parameters: {
      query: {
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description Number of results to return per page. */
        size?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedPostList"];
        };
      };
    };
  };
  /**
   * @description OpenApi3 schema for this API. Format can be selected via content negotiation.
   * 
   * - YAML: application/vnd.oai.openapi
   * - JSON: application/vnd.oai.openapi+json
   */
  schema_retrieve: {
    parameters: {
      query: {
        format?: "json" | "yaml";
        lang?: "af" | "ar" | "ar-dz" | "ast" | "az" | "be" | "bg" | "bn" | "br" | "bs" | "ca" | "cs" | "cy" | "da" | "de" | "dsb" | "el" | "en" | "en-au" | "en-gb" | "eo" | "es" | "es-ar" | "es-co" | "es-mx" | "es-ni" | "es-ve" | "et" | "eu" | "fa" | "fi" | "fr" | "fy" | "ga" | "gd" | "gl" | "he" | "hi" | "hr" | "hsb" | "hu" | "hy" | "ia" | "id" | "ig" | "io" | "is" | "it" | "ja" | "ka" | "kab" | "kk" | "km" | "kn" | "ko" | "ky" | "lb" | "lt" | "lv" | "mk" | "ml" | "mn" | "mr" | "my" | "nb" | "ne" | "nl" | "nn" | "os" | "pa" | "pl" | "pt" | "pt-br" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sr-latn" | "sv" | "sw" | "ta" | "te" | "tg" | "th" | "tk" | "tr" | "tt" | "udm" | "uk" | "ur" | "uz" | "vi" | "zh-hans" | "zh-hant";
      };
    };
    responses: {
      200: {
        content: {
          "application/vnd.oai.openapi": {
            [key: string]: unknown | undefined;
          };
          "application/yaml": {
            [key: string]: unknown | undefined;
          };
          "application/vnd.oai.openapi+json": {
            [key: string]: unknown | undefined;
          };
          "application/json": {
            [key: string]: unknown | undefined;
          };
        };
      };
    };
  };
  /**
   * @description Takes a set of user credentials and returns an access and refresh JSON web
   * token pair to prove the authentication of those credentials.
   */
  token_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["MyTokenObtainPair"];
        "application/x-www-form-urlencoded": components["schemas"]["MyTokenObtainPair"];
        "multipart/form-data": components["schemas"]["MyTokenObtainPair"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["MyTokenObtainPair"];
        };
      };
    };
  };
  /**
   * @description Takes a refresh type JSON web token and returns an access type JSON web
   * token if the refresh token is valid.
   */
  token_refresh_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TokenRefresh"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenRefresh"];
        "multipart/form-data": components["schemas"]["TokenRefresh"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenRefresh"];
        };
      };
    };
  };
  /**
   * @description Takes a token and indicates if it is valid.  This view provides no
   * information about a token's fitness for a particular use.
   */
  token_verify_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TokenVerify"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenVerify"];
        "multipart/form-data": components["schemas"]["TokenVerify"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenVerify"];
        };
      };
    };
  };
}
