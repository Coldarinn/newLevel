import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
  additionalClasses?: string[],
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
  const { additionalClasses = [] } = props;

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

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [...additionalClasses])}>
        <Text title={t('Форма авторизации')} additionalClasses={[cls.textBlock]} />
        {error && <Text text={error} theme={TextTheme.ERROR} additionalClasses={[cls.textBlock]} />}
        <Input placeholder={t('Имя пользователя')} value={username} onChange={onChangeUsername} autoFocus />
        <Input placeholder={t('Пароль')} value={password} onChange={onChangePassword} autoFocus />
        <Button additionalClasses={[cls.button]} theme={ButtonTheme.OUTLINE} disabled={isLoading} onClick={onClick}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
