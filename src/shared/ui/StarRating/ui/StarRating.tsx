import { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StarRating.module.scss';

interface StarRatingProps {
  additionalClasses?: string[];
  onSelect?: (starsCount: number) => void;
  size?: number | string;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    additionalClasses = [], onSelect, size = 24, selectedStars,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars ?? 0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [...additionalClasses])}>
      {stars.map((starNumber) => (
        <button
          key={starNumber}
          type="button"
          className={classNames(cls.button, {
            [cls.selected]: isSelected,
            [cls.hovered]: currentStarsCount >= starNumber,
          }, [])}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        >
          <StarIcon
            className={cls.star}
            width={size}
            height={size}
          />
        </button>
      ))}
    </div>
  );
});
