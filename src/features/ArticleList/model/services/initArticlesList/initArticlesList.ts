import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSort, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

import { getArticleListInited } from '../../selectors/getArticleListInited/getArticleListInited';
import { articleListActions } from '../../slice/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'article/initArticlesList',
  (searchParams, { getState, dispatch }) => {
    const inited = getArticleListInited(getState());

    if (!inited) {
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;
      const sortFromUrl = searchParams.get('sort') as ArticleSort;
      const orderFromUrl = searchParams.get('order') as SortOrder;

      if (orderFromUrl) {
        dispatch(articleListActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articleListActions.setSort(sortFromUrl));
      }
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
