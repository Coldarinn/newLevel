import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  additionalClasses?: string[],
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('notFound');

  return (
    <Page additionalClasses={[classNames(cls.notFoundPage, {}, [...additionalClasses])]}>
      <Text title={t('Страница не найдена')} />
    </Page>
  );
};
