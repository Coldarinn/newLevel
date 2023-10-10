import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

export interface CommentListProps {
  additionalClasses?: string[],
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { additionalClasses = [], comments, isLoading } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <>
        {[1, 2, 3].map((item) => (
          <div key={item} className={classNames(cls.commentCard, {}, [...additionalClasses])}>
            <Skeleton width={50} height={50} rounded="50%" />
            <Skeleton width="100%" height={100} />
          </div>
        ))}
      </>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [...additionalClasses])}>
      {comments?.length ? (
        <>
          {comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
        </>
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  );
};
