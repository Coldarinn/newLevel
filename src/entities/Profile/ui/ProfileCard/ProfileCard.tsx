import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ButtonPadding, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  additionalClasses?: string[],
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation('profile');

  const data = useAppSelector(getProfileData);

  // const onChangeUsername = (value: string) => {
  //   dispatch(loginActions.setUsername(value));
  // };

  return (
    <div className={classNames(cls.ProfileCard, {}, [...additionalClasses])}>
      <div className={cls.header}>
        <Text title={t('Персональные данные')} />
        <Button theme={ButtonTheme.BACKGROUND} padding={ButtonPadding.L}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input placeholder={t('Имя')} value={data?.firstname} />
        <Input placeholder={t('Фамилия')} value={data?.lastname} />
        <Input placeholder={t('Город')} value={data?.city} />
      </div>
    </div>
  );
});
