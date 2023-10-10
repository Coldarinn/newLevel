import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Currency } from '../model/types/currency';
import { CurrencySelect as CurrencySelectComponent, CurrencySelectProps } from './CurrencySelect';

const RenderComponent = (args: CurrencySelectProps) => (
  <div style={{
    width: '350px',
  }}
  >
    <CurrencySelectComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/CurrencySelect',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CurrencySelectComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof CurrencySelectComponent>;

export const Default: StoryObj = {
  args: {
    selectedValue: Currency.RUB,
    readonly: false,
  },
};

export const Readonly: StoryObj = {
  args: {
    selectedValue: Currency.RUB,
    readonly: true,
  },
};

export default meta;
