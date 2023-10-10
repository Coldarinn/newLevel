import { EntityState } from '@reduxjs/toolkit';

import {
  Article, ArticleSort, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view?: ArticleView,
  search?: string,
  sort?: ArticleSort,
  order?: SortOrder,
  type?: ArticleType,
  page: number,
  limit: number,
  hasMore: boolean,
  _inited: boolean,
}
