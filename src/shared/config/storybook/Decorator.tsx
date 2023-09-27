import 'app/styles/index.scss';

import { StoryContext, StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { articleListReducer } from 'entities/Article/model/slices/articleListSlice';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slice/articleCommentsSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
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
  addCommentForm: addCommentFormReducer,
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
          <I18nextProvider i18n={i18n}>
            <Suspense fallback>
              <div
                className="app"
                style={args?.notCentered ? {} : {
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
              >
                <Story />
              </div>
            </Suspense>
          </I18nextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};
