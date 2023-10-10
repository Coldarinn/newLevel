import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleListHasMore = (state: StateSchema) => state.articleList?.hasMore;
