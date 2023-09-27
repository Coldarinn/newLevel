import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default',
  PRIMARY = 'primary',
  BACKGROUND = 'background',
}

export enum ButtonPadding {
  S = 'padding-s',
  M = 'padding-m',
  L = 'padding-l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string[],
  theme?: ButtonTheme,
  padding?: ButtonPadding,
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    additionalClasses = [],
    theme = ButtonTheme.DEFAULT,
    padding = ButtonPadding.S,
    children,
    disabled = false,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        {
          [cls.disabled]: disabled,
        },
        [...additionalClasses, cls[theme], cls[padding]],
      )}
      disabled={disabled}
      {...otherProps}
    >
      { children }
    </button>
  );
});
