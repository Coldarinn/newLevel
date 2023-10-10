import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article/model/types/article';

export const getArticleListType = (state: StateSchema) => state.articleList?.type ?? ArticleType.ALL;
