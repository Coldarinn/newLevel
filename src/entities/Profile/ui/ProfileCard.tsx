import { CountrySelect } from 'entities/Country';
import { CurrencySelect } from 'entities/Currency';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text';

import { ProfileCardProps } from '../model/types/profile';
import cls from './ProfileCard.module.scss';

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    additionalClasses = [],
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  let content;

  if (isLoading) {
    content = (
      <div className={cls.data}>
        <div className={cls.avatar}>
          <Skeleton width={100} height={100} rounded="50%" />
        </div>
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
        <Skeleton width={75} height={24} rounded="8px" />
        <Skeleton width="100%" height={41} rounded="8px" />
      </div>
    );
  } else if (error) {
    content = (
      <div className={cls.block}>
        <Text theme={TextTheme.DANGER} text={t(error)} />
      </div>
    );
  } else {
    content = (
      <div className={cls.data}>
        <div className={cls.avatar}>
          <Avatar src={data?.avatar} />
        </div>
        <Input
          placeholder={t('Имя')}
          value={data?.firstname}
          onChange={onChangeFirstname}
          readonly={readonly}
          require
          data-testid="ProfileCard.firstname"
        />
        <Input
          placeholder={t('Фамилия')}
          value={data?.lastname}
          readonly={readonly}
          onChange={onChangeLastname}
          require
        />
        <Input
          placeholder={t('Город')}
          value={data?.city}
          readonly={readonly}
          onChange={onChangeCity}
          require
        />
        <Input
          placeholder={t('Возраст')}
          value={data?.age}
          type="number"
          readonly={readonly}
          onChange={onChangeAge}
          require
        />
        <CountrySelect selectedValue={data?.country} readonly={readonly} onChange={onChangeCountry} />
        <CurrencySelect selectedValue={data?.currency} readonly={readonly} onChange={onChangeCurrency} />
        <Input
          placeholder={t('Аватар')}
          value={data?.avatar}
          readonly={readonly}
          onChange={onChangeAvatar}
          require
        />
        <Input
          placeholder={t('Логин')}
          value={data?.username}
          readonly={readonly}
          onChange={onChangeUsername}
          require
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [...additionalClasses])}>
      {content}
    </div>
  );
});
