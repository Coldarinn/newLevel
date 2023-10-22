import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './AdminPage.module.scss';

interface AdminPageProps {
  additionalClasses?: string[];
}

export const AdminPage: FC<AdminPageProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('admin');

  return (
    <Page
      additionalClasses={[classNames(cls.page, {}, [...additionalClasses])]}
      dataTestid="AdminPage"
    >
      <Text title={t('Админ панель')} />
    </Page>
  );
};
