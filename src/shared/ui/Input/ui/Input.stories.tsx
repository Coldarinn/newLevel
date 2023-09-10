import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { Input as InputComponent } from './Input';

const Template = (args) => (
   <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <InputComponent {...args} />
   </div>
);

const meta = {
   title: 'shared/Input',
   decorators: [DecoratedComponent],
   parameters: {
      layout: 'fullscreen',
   },
   component: InputComponent,
   render: (args) => <Template {...args} />,
} satisfies Meta<typeof InputComponent>;

export const Input: StoryObj = {
   args: {
      placeholder: 'Input placeholder',
      value: 'Input value',
      additionalClasses: [],
   },
};

export default meta;
