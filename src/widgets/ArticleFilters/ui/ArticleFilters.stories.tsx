import { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { ArticleFilters as ArticleFiltersComponent, ArticleFiltersProps } from './ArticleFilters';

const RenderComponent = (args: ArticleFiltersProps) => (
  <div style={{
    width: '700px',
  }}
  >
    <ArticleFiltersComponent {...args} />
  </div>
);

const meta = {
  title: 'widgets/ArticleFilters',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ArticleFiltersComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof RenderComponent>;

export const ArticleFilters: StoryObj = {
  args: {
  },
};

export default meta;
