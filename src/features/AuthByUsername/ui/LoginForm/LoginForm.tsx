import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  additionalClasses?: string[],
}

export const LoginForm: FC<LoginFormProps> = (props) => {
   const { additionalClasses = [] } = props;

   const [username, setUsername] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const { t } = useTranslation();

   return (
      <div className={classNames(cls.LoginForm, {}, [...additionalClasses])}>
         <Input placeholder={t('Имя пользователя')} value={username} onChange={setUsername} autoFocus />
         <Input placeholder={t('Пароль')} value={password} onChange={setPassword} autoFocus />
         <Button additionalClasses={[cls.button]} theme={ButtonTheme.OUTLINE}>
            {t('Войти')}
         </Button>
      </div>
   );
};
