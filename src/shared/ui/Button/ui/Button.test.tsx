import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
   test('Test render', () => {
      render(<Button>TEST</Button>);
      expect(screen.getByText('TEST')).toBeInTheDocument();
   });

   test('Test clear theme', () => {
      render(<Button theme={ThemeButton.CLEAR}>new text</Button>);
      expect(screen.getByText('new text')).toHaveClass('clear');
      screen.debug();
   });
});
