import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const getArticleListView = (state: StateSchema) =>
  state.articleList?.view || ArticleView.SMALL;
