import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'entities/Article/model/services/fetchArticlesList/fetchArticlesList';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleListActions, articleListReducer, getArticleList } from 'entities/Article/model/slices/articleListSlice';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import {
  getArticleListIsLoading,
} from 'entities/Article/model/selectors/getArticleListIsLoading/getArticleListIsLoading';
import { getArticleListError } from 'entities/Article/model/selectors/getArticleListError/getArticleListError';
import { getArticleListView } from 'entities/Article/model/selectors/getArticleListView/getArticleListView';
import { useCallback } from 'react';
import cls from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  additionalClasses?: string[],
}

const reducers = {
  articleList: articleListReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation('articles');

  const articles = useAppSelector(getArticleList.selectAll);
  const isLoading = useAppSelector(getArticleListIsLoading);
  const error = useAppSelector(getArticleListError);
  const view = useAppSelector(getArticleListView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articleListActions.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articleListActions.initState());
  });

  if (error) {
    return (
      <Text theme={TextTheme.DANGER} title={t(error)} />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articlesPage, {}, [...additionalClasses])}>
        <Text title={t('Статьи')} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
