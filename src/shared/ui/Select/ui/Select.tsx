import {
  memo, useEffect, useRef, useState,
} from 'react';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonPadding, ButtonTheme } from 'shared/ui/Button';

import cls from './Select.module.scss';

export interface SelectOption {
  id: string;
  value: string;
}

interface SelectProps {
  additionalClasses?: string[],
  options?: SelectOption[];
  placeholder?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    additionalClasses = [], options = [], placeholder, selectedValue, onChange, readonly,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const onOptionClick = (option: string) => {
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
          {selectedValue || placeholder}
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
            onClick={() => onOptionClick(option.value)}
          >
            {option.value}
          </Button>
        ))}
      </div>
    </div>
  );
});
