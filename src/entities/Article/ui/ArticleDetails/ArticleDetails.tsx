/* eslint-disable i18next/no-literal-string */
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  id: string;
}

const initialReducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const data = useAppSelector(getArticleData);
  const error = useAppSelector(getArticleError);
  const isLoading = useAppSelector(getArticleIsLoading);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div className={cls.ArticleDetails}>
        <Skeleton additionalClasses={[cls.avatar]} width={200} height={200} rounded="50%" />
        <Skeleton width={300} height={32} rounded="8px" />
        <Skeleton width={600} height={24} rounded="8px" />
        <Skeleton width="100%" height={200} rounded="8px" />
        <Skeleton width="100%" height={200} rounded="8px" />
      </div>
    );
  } else if (error) {
    content = (
      <Text theme={TextTheme.DANGER} title={t(error)} />
    );
  } else {
    content = (
      <>
        <div className={cls.avatar}>
          <Avatar
            size={200}
            src={data?.img}
          />
        </div>
        <Text
          additionalClasses={[cls.title]}
          title={data?.title}
          text={data?.subtitle}
        />
        <div className={cls.articleInfo}>
          <Text text={String(data?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Text text={data?.createdAt} />
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
