import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

export interface ProfilePageProps {
  additionalClasses?: string[],
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { additionalClasses = [] } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [...additionalClasses])}>
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
