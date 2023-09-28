import { ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { getArticleListSearch } from 'features/ArticleList/model/selectors/getArticleListSearch/getArticleListSearch';
import { getArticleListType } from 'features/ArticleList/model/selectors/getArticleListType/getArticleListType';
import { getArticleListView } from 'features/ArticleList/model/selectors/getArticleListView/getArticleListView';
import { fetchArticlesList } from 'features/ArticleList/model/services/fetchArticlesList/fetchArticlesList';
import { articleListActions } from 'features/ArticleList/model/slice/articleListSlice';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { classNames } from 'shared/lib/classNames/classNames';
import { SearchInput } from 'shared/ui/SearchInput';

import cls from './ArticleFilters.module.scss';

interface ArticleFiltersProps {
  additionalClasses?: string[],
}

export const ArticleFilters = (props: ArticleFiltersProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const view = useAppSelector(getArticleListView);
  const search = useAppSelector(getArticleListSearch);
  const type = useAppSelector(getArticleListType);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articleListActions.setView(view));
  }, [dispatch]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articleListActions.setSearch(search));
    dispatch(articleListActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articleListActions.setType(value));
    dispatch(articleListActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  return (
    <div className={classNames(cls.articleFilters, {}, [...additionalClasses])}>
      <SearchInput value={search} onChange={onChangeSearch} />
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleTypeTabs type={type} onTypeClick={onChangeType} />
    </div>
  );
};
