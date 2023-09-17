import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  additionalClasses?: string[],
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { additionalClasses = [] } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [...additionalClasses])}>
      $1
    </div>
  );
};
