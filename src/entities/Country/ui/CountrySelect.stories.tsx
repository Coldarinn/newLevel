import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Country } from '../model/types/country';
import { CountrySelect as CountrySelectComponent, CountrySelectProps } from './CountrySelect';

const RenderComponent = (args: CountrySelectProps) => (
  <div style={{
    width: '350px',
  }}
  >
    <CountrySelectComponent {...args} />
  </div>
);

const meta = {
  title: 'entities/CountrySelect',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CountrySelectComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof CountrySelectComponent>;

export const Default: StoryObj = {
  args: {
    selectedValue: Country.RUSSIA,
    readonly: false,
  },
};

export const Readonly: StoryObj = {
  args: {
    selectedValue: Country.RUSSIA,
    readonly: true,
  },
};

export default meta;
