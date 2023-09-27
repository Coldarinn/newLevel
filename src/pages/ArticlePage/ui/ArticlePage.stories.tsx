import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import ArticlePageComponent from './ArticlePage';

const meta = {
  title: 'pages/ArticlePage',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullpage',
  },
  component: ArticlePageComponent,
  render: (args) => <ArticlePageComponent {...args} />,
} satisfies Meta<typeof ArticlePageComponent>;

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
              role: 'ADMIN',
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
              role: 'USER',
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
              role: 'USER',
              avatar: 'https://iphoneswallpapers.com/wp-content/uploads/2021/02/Hacker-Nation-iPhone-Wallpaper.jpg',
            },
          },
        },
        isLoading: false,
      },
      addCommentForm: {
        isLoading: false,
        text: '',
      },
    },
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
    },
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
};

export default meta;
