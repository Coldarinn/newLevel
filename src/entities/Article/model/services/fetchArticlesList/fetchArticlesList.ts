import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Errors } from 'shared/const/errors';
import { Article } from '../../types/article';
import { getArticleListLimit } from '../../selectors/getArticleListLimit/getArticleListLimit';

interface FetchArticlesListProps {
  page: number,
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'article/fetchArticlesList',
  async ({ page }, { extra, rejectWithValue, getState }) => {
    try {
      const limit = getArticleListLimit(getState());

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: limit,
          _page: page,
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
