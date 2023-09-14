import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import i18n from '../i18n/i18nForTests';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
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
                style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',
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
