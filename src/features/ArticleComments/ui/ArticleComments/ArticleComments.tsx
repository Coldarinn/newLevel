import { memo, Suspense } from 'react';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';

import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';
import { ArticleCommentsForm } from '../ArticleCommentsForm/ArticleCommentsForm';
import { ArticleCommentsList } from '../ArticleCommentsList/ArticleCommentsList';

export interface ArticleCommentsProps {
 additionalClasses?: string[];
 id?: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const { additionalClasses = [], id } = props;

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleComments(id));
  });

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Suspense fallback>
        <ArticleCommentsForm />
      </Suspense>
      <ArticleCommentsList />
    </div>
  );
});
