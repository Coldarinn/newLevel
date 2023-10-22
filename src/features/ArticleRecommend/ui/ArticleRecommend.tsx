import { memo } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line imports-fsd/layer-imports
import { ArticleList } from '@/features/ArticleList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';

import { useGetArticleRecommendQuery } from '../api/articleRecommendApi';
import cls from './ArticleRecommend.module.scss';

interface ArticleRecommendProps {
  additionalClasses?: string[];
}

export const ArticleRecommend = memo((props: ArticleRecommendProps) => {
  const { additionalClasses = [] } = props;

  const { data: articles, isLoading, error } = useGetArticleRecommendQuery(4);

  const { t } = useTranslation('article');

  return (
    <div
      className={classNames(cls.articleRecommend, {}, [...additionalClasses])}
    >
      <Text title={t('Рекомендуем')} additionalClasses={[cls.title]} />
      {error && 'data' in error ? (
        <Text text={t(JSON.stringify(error.data))} theme={TextTheme.DANGER} />
      ) : (
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      )}
    </div>
  );
});
