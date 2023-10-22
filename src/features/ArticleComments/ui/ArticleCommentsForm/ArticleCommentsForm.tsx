import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getArticleError } from '@/entities/Article';
import { CommentForm, commentFormReducer } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { Text } from '@/shared/ui/Text';

import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment';
import cls from './ArticleCommentsForm.module.scss';

const reducers: ReducersList = {
  commentForm: commentFormReducer,
};

export const ArticleCommentsForm = memo(() => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const articleError = useAppSelector(getArticleError);

  const onSend = useCallback(
    (text: string) => {
      dispatch(addArticleComment(text));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {!articleError && (
        <>
          <Text
            title={t('Оставить комментарий')}
            additionalClasses={[cls.commentFormTitle]}
          />
          <CommentForm onSend={onSend} />
        </>
      )}
    </DynamicModuleLoader>
  );
});
