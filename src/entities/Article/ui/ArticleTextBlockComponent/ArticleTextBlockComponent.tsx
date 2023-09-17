import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [...additionalClasses])}>
      {block.title && (
        <Text title={block.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} />
      ))}
    </div>
  );
};
