import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments';
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema';

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const initialState = articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
  error: undefined,
  isLoading: false,
  ids: [],
  entities: {},
});

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchArticleComments.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || initialState,
);

export const { actions: articleCommentsActions } = articleCommentsSlice;
export const { reducer: articleCommentsReducer } = articleCommentsSlice;
