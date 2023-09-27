import { FormEvent, memo, useCallback } from 'react';
import ArrowIcon from 'shared/assets/icons/arrowSave.svg';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { getAddCommentFormText } from '../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  additionalClasses?: string[],
  onSend: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { additionalClasses = [], onSend } = props;

  const text = useAppSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text) {
      onSend(text);
    }
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <form className={classNames(cls.form, {}, [...additionalClasses])} onSubmit={onSubmit}>
        <Input value={text} onChange={onChange} />
        <Button type="submit" additionalClasses={[cls.button]}>
          <ArrowIcon />
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
