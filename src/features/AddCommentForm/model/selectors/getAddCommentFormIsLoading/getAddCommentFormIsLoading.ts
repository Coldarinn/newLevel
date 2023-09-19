import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading;
