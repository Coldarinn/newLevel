import { ArticleList } from 'features/ArticleList/ui/ArticleList/ArticleList';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getArticleRecommendError } from '../model/selectors/getArticleRecommendError/getArticleRecommendError';
import {
  getArticleRecommendIsLoading,
} from '../model/selectors/getArticleRecommendIsLoading/getArticleRecommendIsLoading';
import { fetchArticleRecommend } from '../model/services/fetchArticleRecommend/fetchArticleRecommend';
import { getArticleRecommend } from '../model/slice/articleRecommendSlice';
import cls from './ArticleRecommend.module.scss';

interface ArticleRecommendProps {
  additionalClasses?: string[],
}

export const ArticleRecommend = (props: ArticleRecommendProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const articles = useAppSelector(getArticleRecommend.selectAll);
  const isLoading = useAppSelector(getArticleRecommendIsLoading);
  const error = useAppSelector(getArticleRecommendError);

  useInitialEffect(() => {
    dispatch(fetchArticleRecommend());
  });

  return (
    <div className={classNames(cls.articleRecommend, {}, [...additionalClasses])}>
      <Text title={t('Рекомендуем')} additionalClasses={[cls.title]} />
      {error ? (
        <Text text={t(error)} theme={TextTheme.DANGER} />
      ) : (
        <ArticleList articles={articles} isLoading={isLoading} target="_blank" />
      )}
    </div>
  );
};
