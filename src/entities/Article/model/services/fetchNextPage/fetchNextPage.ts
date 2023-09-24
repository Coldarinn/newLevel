import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleListPage } from '../../selectors/getArticleListPage/getArticleListPage';
import { getArticleListHasMore } from '../../selectors/getArticleListHasMore/getArticleListHasMore';
import { getArticleListIsLoading } from '../../selectors/getArticleListIsLoading/getArticleListIsLoading';
import { articleListActions } from '../../slices/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'article/fetchNextPage',
  (_, { getState, dispatch }) => {
    const page = getArticleListPage(getState());
    const hasMore = getArticleListHasMore(getState());
    const isLoading = getArticleListIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articleListActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  },
);
