import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListPage = (state: StateSchema) => state.articleList?.page || 1;
