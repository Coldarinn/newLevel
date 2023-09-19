import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slice/articleCommentsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import i18n from '../i18n/i18nForTests';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
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
