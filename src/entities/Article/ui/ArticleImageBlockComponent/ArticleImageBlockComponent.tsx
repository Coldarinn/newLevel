import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  additionalClasses?: string[],
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { additionalClasses = [], block } = props;

  return (
    <div className={classNames(cls.block, {}, [...additionalClasses])}>
      <AppImage
        fallback={<Skeleton width="100%" height={200} />}
        src={block.src}
        alt={block.title}
        additionalClasses={[cls.img]}
      />
      {block.title && (
        <Text text={block.title} />
      )}
    </div>
  );
};
