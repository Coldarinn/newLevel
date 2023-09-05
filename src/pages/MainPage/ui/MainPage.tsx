import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

interface MainPageProps {
  additionalClasses?: string[],
}

const MainPage: FC<MainPageProps> = (props) => {
   const { additionalClasses = [] } = props;

   const { t } = useTranslation();

   return (
      <div className={classNames(cls.MainPage, {}, [...additionalClasses])}>
         {t('Главная страница')}
      </div>
   );
};

export default MainPage;
