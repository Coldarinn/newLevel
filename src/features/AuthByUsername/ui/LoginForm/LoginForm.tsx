import {
  useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppSelector } from 'shared/hooks/store/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch/useAppDispatch';
import { ButtonPadding } from 'shared/ui/Button/ui/Button';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
  additionalClasses?: string[],
  onSuccess?: () => void,
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
  const { additionalClasses = [], onSuccess } = props;

  const username = useAppSelector(getLoginUsername);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginIsLoading);
  const error = useAppSelector(getLoginError);

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { t } = useTranslation('login');

  const dispatch = useAppDispatch();

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [...additionalClasses])}>
        <Text title={t('Форма авторизации')} additionalClasses={[cls.textBlock]} />
        {error && <Text text={t(error)} theme={TextTheme.DANGER} additionalClasses={[cls.textBlock]} />}
        <div className={cls.inputWrapper}>
          <Input placeholder={t('Имя пользователя')} value={username} onChange={onChangeUsername} autoFocus />
        </div>
        <div className={cls.inputWrapper}>
          <Input placeholder={t('Пароль')} value={password} onChange={onChangePassword} autoFocus />
        </div>
        <Button
          additionalClasses={[cls.button, 'font-xm']}
          theme={ButtonTheme.PRIMARY}
          padding={ButtonPadding.M}
          disabled={isLoading}
          onClick={onClick}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
