import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import {
  ArticleComments,
  articleCommentsReducer,
} from '@/features/ArticleComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommend } from '@/features/ArticleRecommend';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
  additionalClasses?: string[];
}

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('article');

  const articleRating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: useCallback(
      () => <ArticleRating articleId={id} additionalClasses={[cls.rate]} />,
      [id],
    ),
    off: useCallback(
      () => <div>{t('Оценка статей скоро появится!')}</div>,
      [t],
    ),
  });

  const articleComments = toggleFeatures({
    name: 'isCommentsEnabled',
    on: useCallback(() => <ArticleComments id={id} />, [id]),
    off: useCallback(() => <div>{t('Комментарии скоро появятся!')}</div>, [t]),
  });

  if (__PROJECT__ !== 'storybook') {
    if (!id) {
      return (
        <Text
          theme={TextTheme.DANGER}
          title={t('Не удалось получить статью')}
        />
      );
    }
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page additionalClasses={[...additionalClasses]}>
        <ArticleDetails id={id} />
        <ArticleRecommend />
        {articleRating}
        {articleComments}
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlePage;
