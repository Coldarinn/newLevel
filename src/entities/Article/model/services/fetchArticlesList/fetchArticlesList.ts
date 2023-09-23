import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Errors } from 'shared/const/errors';
import { Article } from '../../types/article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'article/fetchArticlesList',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.GET_ARTICLES);
    }
  },
);
