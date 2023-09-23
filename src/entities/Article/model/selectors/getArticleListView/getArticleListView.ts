import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from '../../types/article';

export const getArticleListView = (state: StateSchema) => state.articleList?.view || ArticleView.SMALL;
