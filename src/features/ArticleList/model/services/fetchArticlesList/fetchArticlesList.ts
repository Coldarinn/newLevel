import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { Errors } from '@/shared/const/errors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { getArticleListLimit } from '../../selectors/getArticleListLimit/getArticleListLimit';
import { getArticleListOrder } from '../../selectors/getArticleListOrder/getArticleListOrder';
import { getArticleListPage } from '../../selectors/getArticleListPage/getArticleListPage';
import { getArticleListSearch } from '../../selectors/getArticleListSearch/getArticleListSearch';
import { getArticleListSort } from '../../selectors/getArticleListSort/getArticleListSort';
import { getArticleListType } from '../../selectors/getArticleListType/getArticleListType';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'article/fetchArticlesList',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const page = getArticleListPage(getState());
      const limit = getArticleListLimit(getState());
      const search = getArticleListSearch(getState());
      const type = getArticleListType(getState());
      const sort = getArticleListSort(getState());
      const order = getArticleListOrder(getState());

      addQueryParams({
        search, type, sort, order,
      });

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.GET_ARTICLES);
    }
  },
);
