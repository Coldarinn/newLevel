import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/localstorage';
import { articleListSchema } from '../types/articleSchema';
import { Article, ArticleView } from '../types/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articleListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = articleListAdapter.getInitialState<articleListSchema>({
  error: undefined,
  isLoading: false,
  view: ArticleView.SMALL,
  ids: [],
  entities: {},
  limit: 0,
  page: 1,
  hasMore: true,
});

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state.view = view;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articleListAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
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
