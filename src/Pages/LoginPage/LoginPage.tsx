import React from 'react';

import { Button } from '../../common/buttons';
import { Input } from '../../common/fields';

const validateUsername = (value: string) => {
  if (!value) return 'Щось треба написати тут';
  return null;
};
const validatePassword = (value: string) => {
  if (!value) return 'Щась не те з паролем, будьте уважні!';
  return null;
};

const loginFormValidateSchema = {
  username: validateUsername,
  password: validatePassword
};

const validateLoginForm = (name: 'username' | 'password', value: string) => {
  return loginFormValidateSchema[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}

import styles from './LoginPage.module.css';
const LoginPage = () => {
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
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username
              })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username: event.target.value });
                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
            />
          </div>
          <div className='form_inner_input_container'>
            <Input
              value={formValues.password}
              placeholder='Пароль'
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password
              })}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password: event.target.value });
                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
            />
          </div>
          <div>
            <Button>Увійти</Button>
          </div>
        </div>
        <div className={styles.signUp_link}>Немає аккаунту?</div>
      </div>
    </div>
  );
};

export default LoginPage;
