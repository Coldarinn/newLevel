import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme, ButtonPadding } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
  additionalClasses?: string[];
  readonly?: boolean;
  disabled?: boolean;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { additionalClasses = [], readonly, disabled } = props;

  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.EditableProfileCardHeader, {}, [...additionalClasses])}>
      <Text title={t('Персональные данные')} />
      {readonly ? (
        <Button
          theme={ButtonTheme.BACKGROUND}
          padding={ButtonPadding.L}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={classNames(cls.row, {}, [...additionalClasses])}>
          <Button
            theme={ButtonTheme.BACKGROUND}
            padding={ButtonPadding.L}
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>
          <Button
            theme={ButtonTheme.PRIMARY}
            padding={ButtonPadding.L}
            onClick={onSave}
            disabled={disabled}
          >
            {t('Сохранить')}
          </Button>
        </div>
      )}
    </div>
  );
});
