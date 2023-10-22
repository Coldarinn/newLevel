import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

export interface CommentCardProps {
  additionalClasses?: string[];
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { additionalClasses = [], comment } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentCard, {}, [...additionalClasses])}>
      <Link to={`/profile/${comment.user.id}`}>
        <Avatar
          src={comment.user.avatar}
          size={50}
          alt={t('Аватар пользователя')}
        />
      </Link>
      <Text additionalClasses={[cls.text]} text={comment.text} />
    </div>
  );
};
