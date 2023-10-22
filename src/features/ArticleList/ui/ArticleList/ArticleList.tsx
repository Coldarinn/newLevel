import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  additionalClasses?: string[];
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const renderSkeletons = (view: ArticleView) =>
  Array(view === ArticleView.BIG ? 5 : 15)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton key={idx} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    additionalClasses = [],
    view = ArticleView.SMALL,
    isLoading,
    articles = [],
    target,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      target={target}
    />
  );

  return (
    <div className={classNames(cls.list, {}, [...additionalClasses])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : !isLoading && <Text text={t('Статьи отсутсвуют')} />}
      {isLoading && renderSkeletons(view)}
    </div>
  );
});
