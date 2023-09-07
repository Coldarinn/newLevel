import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface AboutPageProps {
  additionalClasses?: string[],
}

const AboutPage: FC<AboutPageProps> = (props) => {
   const { additionalClasses = [] } = props;

   const { t } = useTranslation('about');

   return (
      <div className={classNames('', {}, [...additionalClasses])}>
         {t('О странице')}
      </div>
   );
};

export default AboutPage;
