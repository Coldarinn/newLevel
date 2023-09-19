import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'features/EditableProfileCard';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { articleSchema } from 'entities/Article/model/types/articleSchema';
import { ArticleCommentsSchema } from 'features/ArticleComments';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export interface StateSchema {
    user: UserSchema;

    // Async
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: articleSchema;
    articleComments?: ArticleCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
