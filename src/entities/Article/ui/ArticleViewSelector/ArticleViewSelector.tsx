import { ArticleView } from 'entities/Article/model/types/article';
import GridIcon from 'shared/assets/icons/grid.svg';
import RowsIcon from 'shared/assets/icons/rows.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: GridIcon,
  },
  {
    view: ArticleView.BIG,
    Icon: RowsIcon,
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={cls.articleViewSelector}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={view === viewType.view ? ButtonTheme.BACKGROUND : ButtonTheme.DEFAULT}
          onClick={onClick(viewType.view)}
          additionalClasses={[cls.button]}
        >
          <viewType.Icon className={cls.icon} />
        </Button>
      ))}
    </div>
  );
};
