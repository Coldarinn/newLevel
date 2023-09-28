import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ArticleType } from 'entities/Article/model/types/article';

import { articleListActions } from '../../../../../features/ArticleList/model/slice/articleListSlice';
import { getArticleListInited } from '../../selectors/getArticleListInited/getArticleListInited';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'article/initArticlesList',
  (searchParams, { getState, dispatch }) => {
    const inited = getArticleListInited(getState());

    if (!inited) {
      // const orderFromUrl = searchParams.get('order') as SortOrder;
      // const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      // if (orderFromUrl) {
      //   dispatch(articlesPageActions.setOrder(orderFromUrl));
      // }
      // if (sortFromUrl) {
      //   dispatch(articlesPageActions.setSort(sortFromUrl));
      // }
      if (searchFromUrl) {
        dispatch(articleListActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl) {
        dispatch(articleListActions.setType(typeFromUrl));
      }

      dispatch(articleListActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
