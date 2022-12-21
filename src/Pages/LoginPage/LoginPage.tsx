import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@common/buttons';
import { Input, PasswordInput } from '@common/fields';

import styles from './LoginPage.module.css';

const validateUsername = (value: string) => {
  if (!value) return 'Щось треба написати тут';
  else null;
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

interface FormErrorsProps {
  username: string | null | undefined;
  password: string | null | undefined;
}

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = React.useState<FormErrorsProps>({
    username: null,
    password: null
  });
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.container_header}>DOGGEE</div>
        <div className={styles.form_inner}>
          <div className={styles.input_container}>
            <Input
              label='Логін'
              value={formValues.username}
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
            <PasswordInput
              type='password'
              value={formValues.password}
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
