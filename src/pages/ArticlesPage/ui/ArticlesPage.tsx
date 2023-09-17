import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  additionalClasses?: string[],
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('articles');

  return (
    <div className={classNames(cls.articlesPage, {}, [...additionalClasses])}>
      <Text title={t('Статьи')} />
    </div>
  );
};

export default ArticlesPage;
