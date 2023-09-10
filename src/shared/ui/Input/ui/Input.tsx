import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
   additionalClasses?: string[],
   value?: string;
   onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
  const {
    additionalClasses = [], value = '', onChange, placeholder = '', type = 'text', ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.input, {}, [...additionalClasses])}>
      {placeholder && (
        <div className={cls.placeholder}>
          { placeholder }
        </div>
      )}
      <div className={classNames(cls.inputWrapper, {}, [])}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          {...otherProps}
        />
      </div>
    </div>
  );
};

memo(Input);
