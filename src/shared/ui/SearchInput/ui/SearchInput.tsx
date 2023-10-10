import { ChangeEvent, InputHTMLAttributes, useRef } from 'react';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SearchInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface SearchInputProps extends HTMLInputProps {
  additionalClasses?: string[],
  value?: string | number;
  onChange?: (value: string) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const {
    additionalClasses = [],
    value = '',
    onChange,
    placeholder = '',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <label htmlFor="seacrh" className={classNames(cls.searchInput, {}, [...additionalClasses])}>
      <SearchIcon className={cls.icon} />
      <input
        id="seacrh"
        ref={ref}
        value={value}
        placeholder={placeholder}
        className={cls.input}
        onChange={changeHandler}
        {...otherProps}
      />
    </label>
  );
};
