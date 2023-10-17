import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleComments, articleCommentsReducer } from '@/features/ArticleComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommend } from '@/features/ArticleRecommend';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
  additionalClasses?: string[],
}

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{id: string}>();

  const { t } = useTranslation('article');

  if (__PROJECT__ !== 'storybook') {
    if (!id) {
      return (
        <Text theme={TextTheme.DANGER} title={t('Не удалось получить статью')} />
      );
    }
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page additionalClasses={[...additionalClasses]}>
        <ArticleDetails id={id} />
        <ArticleRecommend />
        <ArticleRating articleId={id} additionalClasses={[cls.rate]} />
        <ArticleComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlePage;
