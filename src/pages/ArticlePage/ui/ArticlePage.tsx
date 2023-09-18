import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleCommentsSliceReducer,
  getArticleComments,
} from 'features/ArticleComments/model/slice/articleCommentsSlice';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import {
  getArticleCommentsError,
} from 'features/ArticleComments/model/selectors/getArticleCommentsError/getArticleCommentsError';
import {
  getArticleCommentsIsLoading,
} from 'features/ArticleComments/model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { fetchArticleComments } from 'features/ArticleComments';
import { getArticleError } from 'entities/Article/model/selectors/getArticleError/getArticleError';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
  additionalClasses?: string[],
}

const reducers: ReducersList = {
  articleComments: articleCommentsSliceReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{id: string}>();

  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleComments(id));
  });

  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsIsLoading);
  const articleError = useAppSelector(getArticleError);
  const commentsError = useAppSelector(getArticleCommentsError);

  if (!id) {
    if (__PROJECT__ !== 'storybook') {
      return <div />;
    }

    return (
      <Text theme={TextTheme.DANGER} title={t('Не удалось получить статью')} />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [...additionalClasses])}>
        <ArticleDetails id={id} />
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
    </DynamicModuleLoader>

  );
};

export default ArticlePage;
