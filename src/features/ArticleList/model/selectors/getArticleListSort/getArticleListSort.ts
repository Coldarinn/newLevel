import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSort } from '@/entities/Article';

export const getArticleListSort = (state: StateSchema) => state.articleList?.sort ?? ArticleSort.TITLE;
