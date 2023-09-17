import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { memo, useEffect } from 'react';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  additionalClasses?: string[];
  id: string;
}

const initialReducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { additionalClasses = [], id } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const data = useAppSelector(getArticleData);
  const error = useAppSelector(getArticleError);
  // const isLoading = useAppSelector(getArticleIsLoading);
  const isLoading = true;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={cls.ArticleDetails}>
        <Skeleton additionalClasses={[cls.avatar]} width={200} height={200} rounded="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  }
  if (error) {
    return (
      <Text theme={TextTheme.DANGER} title={t(error)} />
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [...additionalClasses])} />
    </DynamicModuleLoader>
  );
});
