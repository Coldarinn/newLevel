import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Code text={block.code} />
    </div>
  );
};
