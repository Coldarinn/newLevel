import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  additionalClasses?: string[],
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { additionalClasses = [] } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useAppSelector(getLoginState);

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [...additionalClasses])}>
      <Text title={t('Форма авторизации')} additionalClasses={[cls.textBlock]} />
      {error && <Text text={error} theme={TextTheme.ERROR} additionalClasses={[cls.textBlock]} />}
      <Input placeholder={t('Имя пользователя')} value={username} onChange={onChangeUsername} autoFocus />
      <Input placeholder={t('Пароль')} value={password} onChange={onChangePassword} autoFocus />
      <Button additionalClasses={[cls.button]} theme={ButtonTheme.OUTLINE} disabled={isLoading} onClick={onClick}>
        {t('Войти')}
      </Button>
    </div>
  );
};
