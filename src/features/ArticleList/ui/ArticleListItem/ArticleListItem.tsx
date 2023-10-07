import { Article, ArticleView } from 'entities/Article';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ViewIcon from 'shared/assets/icons/view.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  additionalClasses?: string[],
  article: Article,
  target?: HTMLAttributeAnchorTarget,
  view?: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    additionalClasses = [], article, view = ArticleView.BIG, target,
  } = props;

  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.item, {}, [...additionalClasses, cls[view]])}>
      <Link to={`/article/${article.id}`} target={target}>
        <img src={article.img} alt={t('Изображение статьи')} className={cls.image} />
      </Link>

      <div className={cls.flex}>
        <div className={cls.types} title={String(article.type.map((item) => item))}>
          {article.type.map((item) => <span key={item} className={cls.type}>{t(item)}</span>)}
        </div>
        <div className={cls.views}>
          {article.views}
          <ViewIcon className={cls.icon} />
        </div>
      </div>

      <Link to={`/article/${article.id}`} title={article.title} className={cls.title} target={target}>
        {article.title}
      </Link>
    </div>
  );
});
