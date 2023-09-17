import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  additionalClasses?: string[],
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { additionalClasses = [] } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [...additionalClasses])}>
      $1
    </div>
  );
};
