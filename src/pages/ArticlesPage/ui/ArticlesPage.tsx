import { ArticleFilters } from 'features/ArticleFilters/ui/ArticleFilters';
import { getArticleListError } from 'features/ArticleList/model/selectors/getArticleListError/getArticleListError';
import {
  getArticleListIsLoading,
} from 'features/ArticleList/model/selectors/getArticleListIsLoading/getArticleListIsLoading';
import { getArticleListView } from 'features/ArticleList/model/selectors/getArticleListView/getArticleListView';
import { fetchNextPage } from 'features/ArticleList/model/services/fetchNextPage/fetchNextPage';
import { initArticlesList } from 'features/ArticleList/model/services/initArticlesList/initArticlesList';
import {
  articleListReducer, getArticleList,
} from 'features/ArticleList/model/slice/articleListSlice';
import { ArticleList } from 'features/ArticleList/ui/ArticleList/ArticleList';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

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
