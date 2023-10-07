import { getArticleError } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';

import { getArticleCommentsError } from '../../model/selectors/getArticleCommentsError/getArticleCommentsError';
import {
  getArticleCommentsIsLoading,
} from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { getArticleComments } from '../../model/slice/articleCommentsSlice';
import cls from './ArticleCommentsList.module.scss';

export interface ArticleCommentsListProps {
 additionalClasses?: string[];
}

export const ArticleCommentsList = memo((props: ArticleCommentsListProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('article');

  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsIsLoading);
  const articleError = useAppSelector(getArticleError);
  const commentsError = useAppSelector(getArticleCommentsError);

  return (
    <div className={classNames(cls.ArticleCommentsList, {}, [...additionalClasses])}>
      {!articleError && (
        commentsError ? (
          <Text theme={TextTheme.DANGER} text={t(commentsError)} />
        ) : (
          <div className={cls.comments}>
            <Text title={t('Комментарии')} />
            <CommentList isLoading={isLoading} comments={comments} />
          </div>
        )
      )}
    </div>
  );
});
