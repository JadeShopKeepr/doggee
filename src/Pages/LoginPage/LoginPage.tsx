import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@common/buttons';
import { Input } from '@common/fields';

import styles from './LoginPage.module.css';

const navigate = useNavigate();

const validateUsername = (value: string) => {
  if (!value) return 'Щось треба написати тут';
  return null;
};
const validatePassword = (value: string) => {
  if (!value) return 'Щось не те з паролем';
  return null;
};

const loginFormValidateSchema = {
  username: validateUsername,
  password: validatePassword
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = React.useState<FormErrors>({
    username: null,
    password: null
  });
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.container_header}>DOGGEE</div>
        <div className={styles.form_inner}>
          <div className={styles.input_container}>
            <Input
              value={formValues.username}
              placeholder='Логін'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username: event.target.value });
                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username
              })}
            />
          </div>
          <div className='form_inner_input_container'>
            <Input
              value={formValues.password}
              placeholder='Пароль'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password: event.target.value });
                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password
              })}
            />
          </div>
          <div>
            <Button>Увійти</Button>
          </div>
        </div>
        <div onClick={() => navigate('/registration')} className={styles.signUp_link}>
          Немає аккаунту?
        </div>
      </div>
    </div>
  );
};
