import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { useEffect } from 'react';

export const DecoratedComponent = (Story: StoryFn, { globals }: StoryContext) => {
   const { theme } = globals;

   useEffect(() => {
      document.body.className = theme;
   }, [theme]);

   return (
      <StoreProvider>
         <BrowserRouter>
            <ThemeProvider>
               <div
                  className="app"
                  style={{
                     display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',
                  }}
               >
                  <Story />
               </div>
            </ThemeProvider>
         </BrowserRouter>
      </StoreProvider>
   );
};
