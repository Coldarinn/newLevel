import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { articleListActions } from '../../slices/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticleListInited } from '../../selectors/getArticleListInited/getArticleListInited';

export const initArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'article/initArticlesList',
  (_, { getState, dispatch }) => {
    const inited = getArticleListInited(getState());

    if (!inited) {
      dispatch(articleListActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  },
);
