import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button } from 'shared/ui/Button';
import cls from './Code.module.scss';

interface CodeProps {
  additionalClasses?: string[],
  text: string
}

const onCopy = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const Code = (props: CodeProps) => {
  const { additionalClasses = [], text } = props;

  return (
    <pre className={cls.block}>
      <Button additionalClasses={[cls.button]} onClick={() => onCopy(text)}>
        <CopyIcon />
      </Button>
      <code className={classNames(cls.code, {}, [...additionalClasses])}>
        {text}
      </code>
    </pre>
  );
};
