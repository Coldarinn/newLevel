import { FormEvent, memo, useCallback } from 'react';
import ArrowIcon from 'shared/assets/icons/arrowSave.svg';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { getCommentFormText } from '../../model/selectors/commentFormSelectors';
import { commentFormActions } from '../../model/slices/commentFormSlice';
import cls from './CommentForm.module.scss';

interface CommentFormProps {
  additionalClasses?: string[],
  onSend: (text: string) => void;
}

export const CommentForm = memo((props: CommentFormProps) => {
  const { additionalClasses = [], onSend } = props;

  const text = useAppSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const changeHandler = useCallback((value: string) => {
    dispatch(commentFormActions.setText(value));
  }, [dispatch]);

  const submitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();
    onSend(text);
    changeHandler('');
  }, [changeHandler, onSend, text]);

  return (
    <div className={classNames(cls.CommentForm, {}, [...additionalClasses])}>
      <form className={classNames(cls.form, {}, [...additionalClasses])} onSubmit={submitHandler}>
        <Input value={text} onChange={changeHandler} />
        <Button type="submit" additionalClasses={[cls.button]}>
          <ArrowIcon />
        </Button>
      </form>
    </div>
  );
});
