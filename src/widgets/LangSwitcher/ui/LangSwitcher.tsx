import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  additionalClasses?: string[],
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      additionalClasses={[classNames('', {}, [...additionalClasses])]}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
