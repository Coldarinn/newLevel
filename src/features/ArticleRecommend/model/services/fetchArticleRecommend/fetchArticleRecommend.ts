import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article/model/types/article';
import { Errors } from 'shared/const/errors';

export const fetchArticleRecommend = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleRecommend/fetchArticleRecommend',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
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
