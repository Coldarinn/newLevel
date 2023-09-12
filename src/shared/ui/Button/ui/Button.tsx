import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string[],
  theme?: ButtonTheme,
  square?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {
  const {
    additionalClasses = [],
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    square = false,
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
          [cls.square]: square,
          [cls.disabled]: disabled,
        },
        [...additionalClasses, cls[theme], cls[size]],
      )}
      disabled={disabled}
      {...otherProps}
    >
      { children }
    </button>
  );
});
