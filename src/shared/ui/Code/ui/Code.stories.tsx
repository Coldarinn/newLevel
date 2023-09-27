/* eslint-disable no-useless-escape */
import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';

import { Code as CodeComponent, CodeProps } from './Code';

const RenderComponent = (args: CodeProps) => (
  <div style={{
    width: '550px',
  }}
  >
    <CodeComponent {...args} />
  </div>
);

const meta = {
  title: 'shared/Code',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: CodeComponent,
  render: (args) => <RenderComponent {...args} />,
} satisfies Meta<typeof CodeComponent>;

export const Code: StoryObj = {
  args: {
    text: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n     
     document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;`,
  },
};

export default meta;
