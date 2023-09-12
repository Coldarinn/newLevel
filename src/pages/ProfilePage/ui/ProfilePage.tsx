import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [...additionalClasses])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
