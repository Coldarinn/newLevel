import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import ArticlePageComponent from './ArticlePage';

const meta = {
  title: 'pages/ArticlePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticlePageComponent,
  render: (args) => <ArticlePageComponent {...args} />,
} satisfies Meta<typeof ArticlePageComponent>;

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
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/113415626/original/a17667d573bf34559bf0d35993ed76e57d43ad00/program-python-scripts-for-automation-and-data-mining.png',
    views: 5204,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
      'Айти',
    ],
  },
  {
    id: '3',
    title: 'Kotlin news 2019',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://yandex-images.clstorage.net/Upu4M9251/2810ee_Y/oUYWPAm_e3Yd9FhOoKR27__5zM7eT2WTpQTr3CMITeJE--ExD6jpHZMyhqR43zT4vGX-7NDernrb0OAREkzbCWQHM6jdez93qEEcDyXk9t-v2Bka716gM-DVT_nj_A0ysX6kEGooXYhjNjeELeySnzsCXXu2iQxYLATlUdeMyqiwdiXeva8JECwnKnkD5pSfLekJbXyfghHD9RkJEr14cNYpE8b62j6_oeeFk8ufE615U92YZRlcSk-1BGIGTIuMYkUXLEqceNHONnva0WaFPh8oOw8uvgBgsBXoCGM_OPAm6hNlGAoP3FFXdmLr3lIuCVFe6tQ5vuoNpRVjpv65PmBFtP0Z7IqCvqY4S9A0Ns8_COmOX05R0UCGC2tDraoglInhhphYLf5CFfZg6E-RnUvRDnu2ux1rvpYXkDecyCwiNmesGd9LIl2265qDpWYdbVqbTxzswMICZRg48A-qopWKEdYYecy_M5YmocgewO9b4r2oN_tNSq-2duIk7aitYBeUTfjtWMI8JRsLwXV07a05alxc3tIRg7Y4yvAsCBM2WRGHm7i__wI19pBoXkN9y_H9-WXrvVj8lhex9W37X0GXxh9b7njhzAS62eIGxz2PagqMTSwwMaAEqArjb2jj9BgSJYoJ789jlySSWd8iflmynevHCuyqDqTkQ3Rdy5wy12duKS5q4cwEy8gRlLTd7Ck7bM8vUiOwNLo6w2xa01fqEqa4eiytQZVnsxotEj3ZUewrJPifG4y1hEJlv5g_AaQ0bCs--TBtNxpZE9cGLZ36KawfT6GSokUquSCPWvCl63J3euoOPKIW1bCIvSANSDEuafQLHDquVUZgF_yKfXH2BQ3ZfXoBf8Q7WNOm5T3OiAk_T3yRkWAWidsQf2uxBdsRNsioH5-hVwWwW95Q_igS3kvXid77r9Z1YqT-e49R9fW-2KxrM4-2avvCNHbs3otZHm6NsEJyZAnoUY95A',
    views: 94002,
    createdAt: '26.02.2019',
    userId: '1',
    type: [
      'Айти',
    ],
  },
  {
    id: '4',
    title: 'Scala news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://pluspng.com/img-png/scala-logo-png-scala-logo-1200x675.png',
    views: 10222,
    createdAt: '24.01.2022',
    userId: '1',
    type: [
      'Айти',
    ],
  },
];

const data = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  ],
};

export const Default: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      article: {
        data,
        isLoading: false,
        error: undefined,
      },
      articleComments: {
        ids: [
          '1',
          '2',
          '3',
        ],
        entities: {
          1: {
            id: '1',
            text: 'My position on politics is pretty much neutral, I can safely say that I am for everything good and I am against everything bad, that is all that matters for me.',
            articleId: '1',
            userId: '1',
            user: {
              id: '1',
              username: 'user1',
              password: '123',
              roles: ['admin'],
              avatar: 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
            },
          },
          2: {
            id: '2',
            text: 'Howdy, I\'m Tiffany Fenwick, add me to your friend list. My hometown is Vietnam, but right now, I live in Mortinsart. I love this town. What else do you want to know? My job is health service manager, I have a personal life as well, I like genealogy. Which music genre you love the most? I love modern blues and I can\'t imagine my life without books, I love Hippocrates – Medical Writings. After a long day at work, I love to play Katamari Damacy, I like following TV show - Date My Mom (2004–2006), reality, sometimes it is really funny. If you want to talk contact me at tiffanyfenwick@gmail.com Howdy, I\'m Tiffany Fenwick, add me to your friend list. My hometown is Vietnam, but right now, I live in Mortinsart. I love this town. What else do you want to know? My job is health service manager, I have a personal life as well, I like genealogy. Which music genre you love the most? I love modern blues and I can\'t imagine my life without books, I love Hippocrates – Medical Writings. After a long day at work, I love to play Katamari Damacy, I like following TV show - Date My Mom (2004–2006), reality, sometimes it is really funny. If you want to talk contact me at tiffanyfenwick@gmail.com',
            articleId: '1',
            userId: '2',
            user: {
              id: '2',
              username: 'user2',
              password: '123',
              roles: ['user'],
              avatar: 'https://iphoneswallpapers.com/wp-content/uploads/2021/02/Hacker-Nation-iPhone-Wallpaper.jpg',
            },
          },
          3: {
            id: '3',
            text: 'Comment text',
            articleId: '1',
            userId: '2',
            user: {
              id: '2',
              username: 'user2',
              password: '123',
              roles: ['user'],
              avatar: 'https://iphoneswallpapers.com/wp-content/uploads/2021/02/Hacker-Nation-iPhone-Wallpaper.jpg',
            },
          },
        },
        isLoading: false,
      },
      commentForm: {
        text: '',
      },
    },
  },
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

export const Loading: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      article: {
        data,
        isLoading: true,
        error: undefined,
      },
      articleComments: {
        error: undefined,
        isLoading: true,
        ids: [],
        entities: {},
      },
      commentForm: {
        text: '',
      },
    },
  },
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

export const Error: StoryObj = {
  args: {
    notCentered: true,
    initialState: {
      article: {
        isLoading: false,
        error: 'Не удалось получить статью',
      },
    },
  },
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
