import { Popover as PopoverUI, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/sort';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  additionalClasses?: string[];
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
  initialStatus?: boolean;
}

export function Popover(props: PopoverProps) {
  const {
    additionalClasses = [],
    initialStatus,
    trigger,
    children,
    direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <PopoverUI
      as="div"
      className={classNames(cls.popover, {}, [...additionalClasses])}
    >
      {({ open }) => (
        <>
          <PopoverUI.Button as="div" className={cls.trigger}>
            {trigger}
          </PopoverUI.Button>
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
            <PopoverUI.Panel className={classNames(cls.list, {}, menuClasses)}>
              {children}
            </PopoverUI.Panel>
          </Transition>
        </>
      )}
    </PopoverUI>
  );
}
