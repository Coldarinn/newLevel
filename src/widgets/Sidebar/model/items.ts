import { SVGProps, VFC } from 'react';

import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
} from '@/shared/const/router';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: getRouteMain(),
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: getRouteAbout(),
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: getRouteArticles(),
    Icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true,
  },
];
