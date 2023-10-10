import { createContext } from 'react';

import { ThemeContextProps } from '@/shared/lib/context/ThemeContext';

export const ThemeContext = createContext<ThemeContextProps>({});
