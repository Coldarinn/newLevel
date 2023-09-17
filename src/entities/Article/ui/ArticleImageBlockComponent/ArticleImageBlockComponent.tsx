import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [...additionalClasses])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text text={block.title} />
      )}
    </div>
  );
};
