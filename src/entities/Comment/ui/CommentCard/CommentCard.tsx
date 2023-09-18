import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  additionalClasses?: string[];
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { additionalClasses = [], comment } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentCard, {}, [...additionalClasses])}>
      <Link to="/">
        <Avatar src={comment.user.avatar} size={50} alt={t('Аватар пользователя')} />
      </Link>
      <Text additionalClasses={[cls.text]} text={comment.text} />
    </div>
  );
};
