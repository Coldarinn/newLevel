import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonPadding, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import cls from './Rating.module.scss';

export interface RatingProps {
 additionalClasses?: string[];
 feedbackTitle?: string;
 title?: string;
 hasFeedback?: boolean;
 onCancel?: (starsCount: number) => void;
 onAccept?: (starsCount: number, feedback?: string) => void;
 rate?: number;
}

export const Rating = memo((props: RatingProps) => {
  const { t } = useTranslation();

  const {
    additionalClasses = [],
    onAccept,
    feedbackTitle = t('Оставьте отзыв'),
    title,
    hasFeedback,
    onCancel,
    rate = 0,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
    onCancel?.(starsCount);
  }, [feedback, onAccept, onCancel, starsCount]);

  return (
    <div className={classNames(cls.rating, {}, [...additionalClasses])}>
      <Text
        additionalClasses={[cls.title]}
        title={starsCount ? t('Спасибо за оценку!') : title}
      />
      <StarRating
        selectedStars={starsCount}
        onSelect={onSelectStars}
        additionalClasses={[cls.rate]}
      />
      <Modal isOpening={isModalOpen}>
        <div className={cls.modal}>
          <Text title={feedbackTitle} additionalClasses={[cls.title]} />
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Напишите отзыв')}
            additionalClasses={[cls.input]}
          />
          <Button
            theme={ButtonTheme.PRIMARY}
            padding={ButtonPadding.L}
            onClick={acceptHandle}
            additionalClasses={[cls.button]}
          >
            {t('Отправить')}
          </Button>
        </div>
      </Modal>
    </div>
  );
});
