import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleRecommend as ArticleRecommendComponent } from './ArticleRecommend';

const meta = {
  title: 'features/ArticleRecommend',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleRecommendComponent,
  render: (args) => <ArticleRecommendComponent {...args} />,
} satisfies Meta<typeof ArticleRecommendComponent>;

const articles = [
  {
    id: '1',
    title: 'Javascript news СВЕЖАЯ',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: ['Айти'],
  },
  {
    id: '2',
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/113415626/original/a17667d573bf34559bf0d35993ed76e57d43ad00/program-python-scripts-for-automation-and-data-mining.png',
    views: 5204,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['Айти'],
  },
  {
    id: '3',
    title: 'Kotlin news 2019',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://yandex-images.clstorage.net/Upu4M9251/2810ee_Y/oUYWPAm_e3Yd9FhOoKR27__5zM7eT2WTpQTr3CMITeJE--ExD6jpHZMyhqR43zT4vGX-7NDernrb0OAREkzbCWQHM6jdez93qEEcDyXk9t-v2Bka716gM-DVT_nj_A0ysX6kEGooXYhjNjeELeySnzsCXXu2iQxYLATlUdeMyqiwdiXeva8JECwnKnkD5pSfLekJbXyfghHD9RkJEr14cNYpE8b62j6_oeeFk8ufE615U92YZRlcSk-1BGIGTIuMYkUXLEqceNHONnva0WaFPh8oOw8uvgBgsBXoCGM_OPAm6hNlGAoP3FFXdmLr3lIuCVFe6tQ5vuoNpRVjpv65PmBFtP0Z7IqCvqY4S9A0Ns8_COmOX05R0UCGC2tDraoglInhhphYLf5CFfZg6E-RnUvRDnu2ux1rvpYXkDecyCwiNmesGd9LIl2265qDpWYdbVqbTxzswMICZRg48A-qopWKEdYYecy_M5YmocgewO9b4r2oN_tNSq-2duIk7aitYBeUTfjtWMI8JRsLwXV07a05alxc3tIRg7Y4yvAsCBM2WRGHm7i__wI19pBoXkN9y_H9-WXrvVj8lhex9W37X0GXxh9b7njhzAS62eIGxz2PagqMTSwwMaAEqArjb2jj9BgSJYoJ789jlySSWd8iflmynevHCuyqDqTkQ3Rdy5wy12duKS5q4cwEy8gRlLTd7Ck7bM8vUiOwNLo6w2xa01fqEqa4eiytQZVnsxotEj3ZUewrJPifG4y1hEJlv5g_AaQ0bCs--TBtNxpZE9cGLZ36KawfT6GSokUquSCPWvCl63J3euoOPKIW1bCIvSANSDEuafQLHDquVUZgF_yKfXH2BQ3ZfXoBf8Q7WNOm5T3OiAk_T3yRkWAWidsQf2uxBdsRNsioH5-hVwWwW95Q_igS3kvXid77r9Z1YqT-e49R9fW-2KxrM4-2avvCNHbs3otZHm6NsEJyZAnoUY95A',
    views: 94002,
    createdAt: '26.02.2019',
    userId: '1',
    type: ['Айти'],
  },
  {
    id: '4',
    title: 'Scala news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://pluspng.com/img-png/scala-logo-png-scala-logo-1200x675.png',
    views: 10222,
    createdAt: '24.01.2022',
    userId: '1',
    type: ['Айти'],
  },
];

export const ArticleRecommend: StoryObj = {
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: articles,
      },
    ],
  },
};

export default meta;
