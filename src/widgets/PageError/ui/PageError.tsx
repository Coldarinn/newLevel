import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  additionalClasses?: string[];
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('error');

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [...additionalClasses])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
