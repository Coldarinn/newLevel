import { Article } from './article';

export interface articleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
