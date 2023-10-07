import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

export interface AboutPageProps {
  additionalClasses?: string[],
}

const AboutPage = memo((props: AboutPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('about');

  return (
    <Page additionalClasses={[...additionalClasses]}>
      <Text title={t('О странице')} />
    </Page>
  );
});

export default AboutPage;
