import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonPadding, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
  additionalClasses?: string[];
  readonly?: boolean;
  disabled?: boolean;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { additionalClasses = [], readonly, disabled } = props;

  const currentUser = useAppSelector(getProfileData);
  const authUser = useAppSelector(getUserAuthData);

  const canEdit = currentUser?.id === authUser?.id;

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
      {canEdit && (
        readonly ? (
          <Button
            theme={ButtonTheme.BACKGROUND}
            padding={ButtonPadding.L}
            onClick={onEdit}
            data-testid="EditableProfileCardHeader.EditButton"
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <div className={classNames(cls.row, {}, [...additionalClasses])}>
            <Button
              theme={ButtonTheme.BACKGROUND}
              padding={ButtonPadding.L}
              onClick={onCancelEdit}
              data-testid="EditableProfileCardHeader.CancelButton"
            >
              {t('Отменить')}
            </Button>
            <Button
              theme={ButtonTheme.PRIMARY}
              padding={ButtonPadding.L}
              onClick={onSave}
              disabled={disabled}
              data-testid="EditableProfileCardHeader.SaveButton"
            >
              {t('Сохранить')}
            </Button>
          </div>
        )
      )}
    </div>
  );
});
