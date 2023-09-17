import { FC, lazy } from 'react';
import { ArticlePageProps } from './ArticlePage';

export const ArticlePageAsync = lazy<FC<ArticlePageProps>>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./ArticlePage')), 1500);
}));
