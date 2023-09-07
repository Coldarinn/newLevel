import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
   CLEAR = 'clear',
   OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string[],
  theme?: ThemeButton,
}

export const Button: FC<ButtonProps> = (props) => {
   const {
      additionalClasses = [], theme = ThemeButton.CLEAR, children, ...otherProps
   } = props;

   return (
      <button
         type="button"
         className={classNames(cls.Button, {}, [...additionalClasses, cls[theme]])}
         {...otherProps}
      >
         { children }
      </button>
   );
};
