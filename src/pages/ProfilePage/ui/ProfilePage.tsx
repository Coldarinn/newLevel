import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
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
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
