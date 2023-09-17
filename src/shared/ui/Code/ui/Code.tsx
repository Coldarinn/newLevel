import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Code.module.scss';

interface CodeProps {
  additionalClasses?: string[],
  children: ReactNode
}

export const Code = (props: CodeProps) => {
  const { additionalClasses = [], children } = props;

  return (
    <pre>
      <code className={classNames(cls.code, {}, [...additionalClasses])}>
        {children}
      </code>
    </pre>
  );
};
