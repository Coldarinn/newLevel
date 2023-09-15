import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { profileActions } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

interface EditableProfileCardProps {
  additionalClasses?: string[];
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  const formData = useAppSelector(getProfileForm);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const readonly = useAppSelector(getProfileReadonly);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ age: value || '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ currency: value || '' }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ country: value || '' }));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <EditableProfileCardHeader readonly={readonly} />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
});
