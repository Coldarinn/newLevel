import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  additionalClasses?: string[],
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { additionalClasses = [] } = props;

  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [...additionalClasses])}>
      $1
    </div>
  );
};
