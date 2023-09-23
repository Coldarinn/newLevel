import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from 'entities/Article/model/types/article';
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
      <ArticleList articles={[]} view={ArticleView.SMALL} />
    </div>
  );
};

export default ArticlesPage;
