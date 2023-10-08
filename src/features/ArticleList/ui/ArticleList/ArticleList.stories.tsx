import { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { ArticleList as ArticleListComponent } from './ArticleList';

const meta = {
  title: 'features/ArticleList',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleListComponent,
  render: (args) => <ArticleListComponent {...args} />,
} satisfies Meta<typeof ArticleListComponent>;

const articles = [
  {
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
  {
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
  {
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
  {
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
];

export const Grid: StoryObj = {
  args: {
    notCentered: true,
    articles,
    view: ArticleView.SMALL,
    isLoading: false,
  },
};

export const Rows: StoryObj = {
  args: {
    notCentered: true,
    articles,
    view: ArticleView.BIG,
    isLoading: false,
  },
};

export const GridIsLoading: StoryObj = {
  args: {
    notCentered: true,
    articles: [],
    view: ArticleView.SMALL,
    isLoading: true,
  },
};

export const RowsIsLoading: StoryObj = {
  args: {
    notCentered: true,
    articles: [],
    view: ArticleView.BIG,
    isLoading: true,
  },
};

export const Empty: StoryObj = {
  args: {
    articles: [],
    view: ArticleView.BIG,
    isLoading: false,
  },
};

export default meta;
