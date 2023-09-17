import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [...additionalClasses])}>
      {JSON.stringify(block)}
      <Code>
        {block.code}
      </Code>
    </div>
  );
};
