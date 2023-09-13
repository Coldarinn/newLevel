import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface MainPageProps {
  additionalClasses?: string[],
}

const MainPage = memo((props: MainPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('main');

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      {t('Главная страница')}
      <Counter />
    </div>
  );
});

export default MainPage;
