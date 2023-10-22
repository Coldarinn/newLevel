import { useCallback } from 'react';

import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/grid.svg';
import RowsIcon from '@/shared/assets/icons/rows.svg';
import { Tabs } from '@/shared/ui/Tabs';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    value: ArticleView.SMALL,
    content: <GridIcon className={cls.icon} />,
  },
  {
    value: ArticleView.BIG,
    content: <RowsIcon className={cls.icon} />,
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { view, onViewClick } = props;

  const onClick = useCallback(
    (newView: ArticleView) => {
      onViewClick(newView);
    },
    [onViewClick],
  );

  return (
    <div className={cls.articleViewSelector}>
      <Tabs tabs={viewTypes} onTabClick={onClick} value={view} />
    </div>
  );
};
