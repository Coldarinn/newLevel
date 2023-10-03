import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendIsLoading = (state: StateSchema) => state.articleComments?.isLoading;
