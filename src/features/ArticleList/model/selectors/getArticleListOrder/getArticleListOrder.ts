import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListOrder = (state: StateSchema) =>
  state.articleList?.order ?? 'asc';
