import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments';

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

export const { actions: articleCommentsSliceActions } = articleCommentsSlice;
export const { reducer: articleCommentsSliceReducer } = articleCommentsSlice;
