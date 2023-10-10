import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListSearch = (state: StateSchema) => state.articleList?.search ?? '';
