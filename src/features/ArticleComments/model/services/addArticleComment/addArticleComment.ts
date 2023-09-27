import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleData } from 'entities/Article/model/selectors/getArticleData/getArticleData';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { Errors } from 'shared/const/errors';

import { fetchArticleComments } from '../fetchArticleComments/fetchArticleComments';

export const addArticleComment = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
  '/articleComments/addArticleComment',
  async (text, {
    extra, dispatch, rejectWithValue, getState,
  }) => {
    try {
      const userData = getUserAuthData(getState());
      const article = getArticleData(getState());

      if (!userData || !text || !article) {
        throw new Error();
      }

      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchArticleComments(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.SAVE_COMMENT);
    }
  },
);
