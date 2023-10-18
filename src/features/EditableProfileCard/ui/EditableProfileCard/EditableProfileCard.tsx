import { memo, useCallback, useMemo } from 'react';

import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  additionalClasses?: string[];
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { additionalClasses = [], id } = props;

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });

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

  const isDisable = useMemo(() => !(formData?.firstname && formData?.lastname && formData?.city
  && formData?.avatar && formData?.age && formData?.username), [formData]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [...additionalClasses])}>
        <EditableProfileCardHeader readonly={readonly} disabled={isDisable} />
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
    </DynamicModuleLoader>
  );
});
