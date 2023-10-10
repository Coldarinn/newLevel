import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames(cls.block, {}, [...additionalClasses])}>
      {block.title && (
        <Text title={block.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} />
      ))}
    </div>
  );
};
