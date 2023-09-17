import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

export interface ArticlePageProps {
  additionalClasses?: string[],
}

const ArticlePage = (props: ArticlePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{id: string}>();

  const { t } = useTranslation('article');

  if (!id) {
    return (
      <Text theme={TextTheme.DANGER} title={t('Не удалось получить статью')} />
    );
  }

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Text title={t('Статья')} />
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticlePage;
