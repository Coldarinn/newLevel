import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListError = (state: StateSchema) =>
  state.articleList?.error;
