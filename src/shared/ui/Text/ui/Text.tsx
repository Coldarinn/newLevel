import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  DANGER = 'danger',
}

interface TextProps {
  additionalClasses?: string[];
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    additionalClasses = [],
    text,
    title,
    theme = TextTheme.DEFAULT,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [...additionalClasses, cls[theme]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
