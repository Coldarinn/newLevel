import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';
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
            enter={popupCls.transition}
            enterFrom={popupCls.opacity}
            enterTo={popupCls.full}
            leave={popupCls.transition}
            leaveFrom={popupCls.opacity}
            leaveTo={popupCls.full}
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
                          className={classNames(cls.item, { [popupCls.active]: active })}
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
                        className={classNames(cls.item, { [popupCls.active]: active })}
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
