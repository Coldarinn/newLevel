import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const DecoratedComponent = (Story: StoryFn, { globals }: StoryContext) => {
   const { theme } = globals;

   return (
      <BrowserRouter>
         <ThemeProvider>
            <div
               className={`app ${theme}`}
               style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',
               }}
            >
               <Story />
            </div>
         </ThemeProvider>
      </BrowserRouter>
   );
};
