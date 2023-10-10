import {
  ChangeEvent, InputHTMLAttributes, memo, useRef,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'require'>

export interface InputProps extends HTMLInputProps {
   additionalClasses?: string[],
   value?: string | number;
   onChange?: (value: string) => void;
   readonly?: boolean;
   require?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    additionalClasses = [],
    value = '',
    onChange,
    placeholder = '',
    type = 'text',
    readonly = false,
    require = false,
    ...otherProps
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
      <div className={classNames(cls.inputWrapper, { [cls.readonly]: readonly, [cls.error]: !value && require }, [])}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          disabled={readonly}
          {...otherProps}
        />
      </div>
    </div>
  );
});

memo(Input);
