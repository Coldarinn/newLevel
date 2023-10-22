import { useCallback } from 'react';

import { ArticleSort, ArticleType, ArticleView } from '@/entities/Article';
import {
  articleListActions,
  fetchArticlesList,
  getArticleListOrder,
  getArticleListSearch,
  getArticleListSort,
  getArticleListType,
  getArticleListView,
} from '@/features/ArticleList';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { SearchInput } from '@/shared/ui/SearchInput';

import cls from './ArticleFilters.module.scss';

export interface ArticleFiltersProps {
  additionalClasses?: string[];
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
  const sort = useAppSelector(getArticleListSort);
  const order = useAppSelector(getArticleListOrder);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articleListActions.setView(view));
    },
    [dispatch],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articleListActions.setSearch(search));
      dispatch(articleListActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articleListActions.setType(value));
      dispatch(articleListActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSort) => {
      dispatch(articleListActions.setSort(newSort));
      dispatch(articleListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articleListActions.setOrder(newOrder));
      dispatch(articleListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <SearchInput value={search} onChange={onChangeSearch} />
      <div className={cls.flex}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <ArticleTypeTabs type={type} onTypeClick={onChangeType} />
    </div>
  );
};
