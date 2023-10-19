import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import {
  ArticleList, articleListReducer, fetchNextPage, getArticleList,
  getArticleListError, getArticleListIsLoading, getArticleListView, initArticlesList,
} from '@/features/ArticleList';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ArticleFilters } from '@/widgets/ArticleFilters';
import { Page } from '@/widgets/Page';

import cls from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  additionalClasses?: string[],
}

const reducers = {
  articleList: articleListReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { additionalClasses = [] } = props;

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const { t } = useTranslation('articles');

  const articles = useAppSelector(getArticleList.selectAll);
  const isLoading = useAppSelector(getArticleListIsLoading);
  const error = useAppSelector(getArticleListError);
  const view = useAppSelector(getArticleListView);

  useInitialEffect(() => {
    dispatch(initArticlesList(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextPage());
  }, [dispatch]);

  if (error) {
    return (
      <Text theme={TextTheme.DANGER} title={t(error)} />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page additionalClasses={[classNames(cls.articlesPage, {}, [...additionalClasses])]} onScrollEnd={onLoadNextPart}>
        <Text title={t('Статьи')} />
        <ArticleFilters />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
