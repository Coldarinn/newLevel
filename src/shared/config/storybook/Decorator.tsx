import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18nForTests';

export const DecoratedComponent = (Story: StoryFn, { globals, args }: StoryContext) => {
  const { theme } = globals;

  useEffect(() => {
    document.body.className = theme;
  }, [theme, args]);

  return (
    <StoreProvider initialState={args?.initialState ?? {}}>
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
