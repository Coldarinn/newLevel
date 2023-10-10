import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSort } from '@/entities/Article';
import DirectionIcon from '@/shared/assets/icons/direction.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Select, SelectOption } from '@/shared/ui/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  sort: ArticleSort,
  order: SortOrder,
  onChangeSort: (view: ArticleSort) => void;
  onChangeOrder: (view: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const {
    sort, order, onChangeSort, onChangeOrder,
  } = props;

  const { t } = useTranslation();

  const sortOptions = useMemo<SelectOption<ArticleSort>[]>(() => [
    {
      id: ArticleSort.CREATED,
      value: t('дате создания'),
    },
    {
      id: ArticleSort.TITLE,
      value: t('названию'),
    },
    {
      id: ArticleSort.VIEWS,
      value: t('просмотрам'),
    },
  ], [t]);

  const changeSortHandler = useCallback((newSort: ArticleSort) => {
    onChangeSort(newSort);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback(() => {
    onChangeOrder(order === 'asc' ? 'desc' : 'asc');
  }, [order, onChangeOrder]);

  return (
    <div className={cls.articleSort}>
      <Button onClick={changeOrderHandler} additionalClasses={[cls.button]}>
        <DirectionIcon className={classNames(cls.icon, { [cls.rotate]: order === 'asc' }, [])} />
      </Button>
      <div className={cls.select}>
        <Select
          options={sortOptions}
          selectedValue={sort}
          onChange={changeSortHandler}
        />
      </div>
    </div>
  );
};
