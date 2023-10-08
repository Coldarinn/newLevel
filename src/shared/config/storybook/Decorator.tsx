import 'app/styles/index.scss';

import { StoryContext, StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { articleReducer } from 'entities/Article';
import { commentFormReducer } from 'entities/Comment';
import { articleCommentsReducer } from 'features/ArticleComments';
import { articleListReducer } from 'features/ArticleList';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'features/EditableProfileCard';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import i18n from '../i18n/i18nForTests';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleList: articleListReducer,
  articleComments: articleCommentsReducer,
  commentForm: commentFormReducer,
};

export const DecoratedComponent = (Story: StoryFn, { globals, args }: StoryContext) => {
  const { theme } = globals;

  useEffect(() => {
    document.body.className = theme;
  }, [theme, args]);

  return (
    <StoreProvider initialState={args?.initialState ?? {}} asyncReducers={initialAsyncReducers}>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback>
            <I18nextProvider i18n={i18n}>
              <div
                className="app"
                style={args?.notCentered ? {} : {
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
              >
                <Story />
              </div>
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};
