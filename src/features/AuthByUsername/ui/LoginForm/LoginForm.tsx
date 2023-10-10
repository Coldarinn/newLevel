import {
  FormEvent,
  useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '@/shared/hooks/store/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/store/useAppSelector/useAppSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonPadding, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

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

  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(cls.LoginForm, {}, [...additionalClasses])} onSubmit={onSubmit}>
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
          type="submit"
          theme={ButtonTheme.PRIMARY}
          padding={ButtonPadding.M}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
