import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleSchema } from 'entities/Article/model/types/articleSchema';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleCommentsSchema } from 'features/ArticleComments';
import { ArticleListSchema } from 'features/ArticleList/model/types/articleList';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { rtkApi } from 'shared/api/rtkApi';
import { ScrollSaveSchema } from 'widgets/Page/model/types/ScrollSaveSchema';

export interface StateSchema {
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: articleSchema;
    articleList?: ArticleListSchema;
    articleRecommend?: ArticleCommentsSchema;
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
