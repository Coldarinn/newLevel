import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  additionalClasses?: string[],
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('notFound');

  return (
    <div className={classNames(cls.NotFoundPage, {}, [...additionalClasses])}>
      {t('Страница не найдена')}
    </div>
  );
};
