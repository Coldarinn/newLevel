import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '@/entities/Article';
import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import ArticlesPageComponent from './ArticlesPage';

const ids = [1, 2, 3, 4];

const entities = {
  1: {
    id: '1',
    title: 'Javascript news СВЕЖАЯ',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: [
      'Айти',
    ],
  },
  2: {
    id: '2',
    title: 'Экономическая статья - ИНФЛЯЦИЯ!',
    subtitle: 'Экономика',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
      'Экономика',
    ],
  },
  3: {
    id: '3',
    title: 'Научная статья 1 - Биология',
    subtitle: 'БиологиЯ',
    img: 'https://kartinkin.net/uploads/posts/2022-02/1645783899_19-kartinkin-net-p-kartinki-po-biologii-20.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
      'Наука',
    ],
  },
  4: {
    id: '4',
    title: 'Научная статья 2 - Биология',
    subtitle: 'БиологиЯ',
    img: 'https://kartinkin.net/uploads/posts/2022-05/1652214942_9-kartinkin-net-p-biologiya-krasivie-kartinki-10.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
      'Наука',
    ],
  },
};

const meta = {
  title: 'pages/ArticlesPage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticlesPageComponent,
  render: (args) => <ArticlesPageComponent {...args} />,
} satisfies Meta<typeof ArticlesPageComponent>;

export const Grid: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      articleList: {
        isLoading: false,
        _inited: true,
        hasMore: false,
        page: 1,
        limit: 9,
        view: ArticleView.SMALL,
        ids,
        entities,
      },
    },
  },
};

export const Rows: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      articleList: {
        isLoading: false,
        _inited: true,
        hasMore: false,
        page: 1,
        limit: 9,
        view: ArticleView.BIG,
        ids,
        entities,
      },
    },
  },
};

export const WithSearch: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      articleList: {
        isLoading: false,
        _inited: true,
        hasMore: false,
        page: 1,
        limit: 9,
        view: ArticleView.BIG,
        ids,
        entities,
        search: 'Search text',
      },
    },
  },
};

export default meta;
