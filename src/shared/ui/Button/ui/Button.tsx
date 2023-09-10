import { FC, ButtonHTMLAttributes } from 'react';
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
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
   const {
      additionalClasses = [], theme = ButtonTheme.CLEAR, size = ButtonSize.M, square = false, children, ...otherProps
   } = props;

   return (
      <button
         type="button"
         className={classNames(cls.Button, { [cls.square]: square }, [...additionalClasses, cls[theme], cls[size]])}
         {...otherProps}
      >
         { children }
      </button>
   );
};
