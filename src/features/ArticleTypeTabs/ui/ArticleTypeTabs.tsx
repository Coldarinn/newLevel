import { ArticleType } from 'entities/Article/model/types/article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs';

import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
  type: ArticleType,
  onTypeClick: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { type, onTypeClick } = props;

  const { t } = useTranslation('articles');

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  const onTabClick = useCallback((newType: ArticleType) => {
    onTypeClick(newType);
  }, [onTypeClick]);

  return (
    <div className={cls.ArticleTypeTabs}>
      <Tabs tabs={typeTabs} onTabClick={onTabClick} value={type} />
    </div>
  );
};
