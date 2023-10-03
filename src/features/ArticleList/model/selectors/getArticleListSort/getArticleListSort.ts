import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSort } from 'entities/Article/model/types/article';

export const getArticleListSort = (state: StateSchema) => state.articleList?.sort ?? ArticleSort.TITLE;
