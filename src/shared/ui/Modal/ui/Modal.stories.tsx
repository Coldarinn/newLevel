import type { Meta, StoryObj } from '@storybook/react';
import { DecoratedComponent } from 'shared/config/storybook/Decorator';
import { useTranslation } from 'react-i18next';
import { Modal as ModalComponent } from './Modal';

const meta = {
  title: 'shared/Modal',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: ModalComponent,
  render: (args) => <ModalComponent {...args} />,
} satisfies Meta<typeof ModalComponent>;

const ModalChildren = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px 50px', borderRadius: '8px', background: 'white' }}>
      {t('Войти')}
    </div>
  );
};

export const Modal: StoryObj = {
  args: {
    children: <ModalChildren />,
    isOpening: true,
    additionalClasses: [],
  },
};

export default meta;
