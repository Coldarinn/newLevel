import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListLimit = (state: StateSchema) =>
  state.articleList?.limit || 4;
