import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';
import { Errors } from 'shared/const/errors';

export const fetchArticleComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleComments/fetchArticleComments',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Comment[]>('/comments/', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.GET_COMMENTS);
    }
  },
);
