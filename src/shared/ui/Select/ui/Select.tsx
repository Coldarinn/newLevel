import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonPadding, ButtonTheme } from 'shared/ui/Button';

import cls from './Select.module.scss';

export interface SelectOption<T> {
  id: T;
  value: T;
}

interface SelectProps<T> {
  additionalClasses?: string[],
  options?: SelectOption<T>[];
  placeholder?: string;
  selectedValue?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    additionalClasses = [], options = [], placeholder, selectedValue, onChange, readonly,
  } = props;

  const foundValue = useMemo(() => options.find((item) => item.id === selectedValue)?.value, [options, selectedValue]);

  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const onOptionClick = (option: T) => {
    onChange?.(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(
        cls.select,
        { [cls.readonly]: readonly, [cls.isOpen]: isOpen },
        [...additionalClasses],
      )}
      ref={selectRef}
    >
      <Button
        theme={ButtonTheme.BACKGROUND}
        padding={ButtonPadding.M}
        additionalClasses={[cls.header]}
        onClick={toggleDropdown}
        disabled={readonly}
      >
        <span className={cls.placeholder}>
          {foundValue || placeholder}
        </span>
        <span className={cls.icon}>
          <ArrowIcon />
        </span>
      </Button>
      <div className={cls.options}>
        {options.map((option) => (
          <Button
            key={option.value}
            additionalClasses={[cls.option]}
            disabled={readonly}
            onClick={() => onOptionClick(option.id)}
          >
            {option.value}
          </Button>
        ))}
      </div>
    </div>
  );
};
