import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';

const reducers: ReducersList = {
  profile: profileReducer,
};

export interface ProfilePageProps {
  additionalClasses?: string[],
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{id: string}>();

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page additionalClasses={[...additionalClasses]}>
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
