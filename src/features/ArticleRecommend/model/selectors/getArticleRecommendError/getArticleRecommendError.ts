import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendError = (state: StateSchema) => state.articleComments?.error;
