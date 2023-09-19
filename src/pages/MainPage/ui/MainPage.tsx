import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

export interface MainPageProps {
  additionalClasses?: string[],
}

const MainPage = memo((props: MainPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('main');

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Text title={t('Главная страница')} />
    </div>
  );
});

export default MainPage;
