import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
    id: number | string;
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    additionalClasses?: string[];
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
    initialStatus?: boolean;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
  const {
    additionalClasses = [], initialStatus, trigger, items, direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [...additionalClasses])}>
      {({ open }) => (
        <>
          <Menu.Button className={cls.btn}>
            {trigger}
          </Menu.Button>
          <Transition
            show={initialStatus ?? open}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
              {items.map((item) => {
                if (item.href) {
                  return (
                    <Menu.Item disabled={item.disabled} key={item.id}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className={classNames(cls.item, { [cls.active]: active })}
                        >
                          {item.content}
                        </a>
                      )}
                    </Menu.Item>
                  );
                }

                return (
                  <Menu.Item disabled={item.disabled} key={item.id}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={item.onClick}
                        disabled={item.disabled}
                        className={classNames(cls.item, { [cls.active]: active })}
                      >
                        {item.content}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
