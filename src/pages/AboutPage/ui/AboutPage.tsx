import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export interface AboutPageProps {
  additionalClasses?: string[],
}

const AboutPage = memo((props: AboutPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('about');

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      {t('О странице')}
    </div>
  );
});

export default AboutPage;
