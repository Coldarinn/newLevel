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
});

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;
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
        articleListAdapter.setAll(state, action.payload);
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
