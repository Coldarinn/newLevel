import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from './article';

export interface articleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}

export interface articleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view?: ArticleView,
  page: number,
  limit: number,
  hasMore: boolean,
  _inited: boolean,
}
