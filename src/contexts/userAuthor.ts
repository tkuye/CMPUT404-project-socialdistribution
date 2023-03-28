
import React from 'react';
import {Author} from '@/index'

export const UserAuthorContext = React.createContext<Author | null>(null);
export const UserAuthorContextProvider = UserAuthorContext.Provider;
export const useUserAuthor = () => {
    const userAuthor = React.useContext(UserAuthorContext);
    return userAuthor;
}