import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';

export interface MainPageProps {
  additionalClasses?: string[],
}

const MainPage = memo((props: MainPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('main');

  return (
    <Page additionalClasses={[...additionalClasses]}>
      <Text title={t('Главная страница')} />
    </Page>
  );
});

export default MainPage;
