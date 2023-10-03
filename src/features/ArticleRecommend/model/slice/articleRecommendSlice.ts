import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article';

import { fetchArticleRecommend } from '../services/fetchArticleRecommend/fetchArticleRecommend';
import { ArticleRecommendSchema } from '../types/ArticleRecommendSchema';

const articleRecommendAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = articleRecommendAdapter.getInitialState<ArticleRecommendSchema>({
  error: undefined,
  isLoading: false,
  ids: [],
  entities: {},
});

const articleRecommendSlice = createSlice({
  name: 'articleRecommend',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchArticleRecommend.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecommend.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articleRecommendAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommend.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getArticleRecommend = articleRecommendAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommend || initialState,
);

export const { actions: articleRecommendActions } = articleRecommendSlice;
export const { reducer: articleRecommendReducer } = articleRecommendSlice;
