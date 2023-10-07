import { ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';

import cls from './ArticleListItemSkeleton.module.scss';

interface ArticleListItemSkeletonProps {
  view: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { view = ArticleView.SMALL } = props;

  return (
    <div className={classNames(cls.articleListItemSkeleton, {}, [cls[view]])}>
      <Skeleton width="100%" height={200} rounded="8px" />
      <div className={cls.flex}>
        <div className={cls.types}>
          <Skeleton width={70} height={20} rounded="8px" />
          <Skeleton width={70} height={20} rounded="8px" />
        </div>
        <Skeleton width={30} height={20} rounded="8px" />
      </div>
      <Skeleton width={120} height={20} rounded="8px" />
    </div>
  );
};
