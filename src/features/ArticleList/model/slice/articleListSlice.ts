import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article, ArticleSort, ArticleType, ArticleView,
} from 'entities/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';

import { ArticleListSchema } from '../../model/types/articleList';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articleListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = articleListAdapter.getInitialState<ArticleListSchema>({
  error: undefined,
  isLoading: false,
  view: ArticleView.SMALL,
  search: '',
  type: ArticleType.ALL,
  sort: ArticleSort.TITLE,
  order: 'asc',
  ids: [],
  entities: {},
  limit: 0,
  page: 1,
  hasMore: true,
  _inited: false,
});

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSort>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state.view = view;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articleListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articleListAdapter.setAll(state, action.payload);
        } else {
          articleListAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getArticleList = articleListAdapter.getSelectors<StateSchema>(
  (state) => state.articleList || initialState,
);

// Action creators are generated for each case reducer function
export const { actions: articleListActions } = articleListSlice;
export const { reducer: articleListReducer } = articleListSlice;
