import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  additionalClasses?: string[],
}

export const ForbiddenPage: FC<ForbiddenPageProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation();

  return (
    <Page additionalClasses={[classNames(cls.page, {}, [...additionalClasses])]} dataTestid="ForbiddenPage">
      <Text title={t('У Вас нет доступа к этой странице')} />
    </Page>
  );
};
