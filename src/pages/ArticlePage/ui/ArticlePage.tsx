import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
  additionalClasses?: string[],
}

const ArticlePage = (props: ArticlePageProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlePage, {}, [...additionalClasses])}>
      <Text title={t('Статья')} />
    </div>
  );
};

export default ArticlePage;
