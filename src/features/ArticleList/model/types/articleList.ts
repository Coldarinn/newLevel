import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article/model/types/article';

export interface ArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view?: ArticleView,
  page: number,
  limit: number,
  hasMore: boolean,
  _inited: boolean,
}