import { Meta } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Navbar as NavbarComponent } from './Navbar';

const meta = {
   title: 'widget/Navbar',
   decorators: [DecoratedComponent],
} satisfies Meta<typeof NavbarComponent>;

export default meta;

export const Navbar = () => <NavbarComponent />;
