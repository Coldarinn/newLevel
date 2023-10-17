import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface ArticleRatingProps {
 additionalClasses?: string[];
 articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { additionalClasses = [], articleId } = props;

  const { t } = useTranslation();

  const userData = useAppSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback,
      });
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <Rating
      additionalClasses={additionalClasses}
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      title={t('Оцените статью')}
      feedbackTitle={t(
        'Оставьте свой отзыв о статье, это поможет улучшить качество',
      )}
      hasFeedback
    />
  );
});

export default ArticleRating;
