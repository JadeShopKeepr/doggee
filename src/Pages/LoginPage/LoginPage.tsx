import React from 'react';

import { Button } from '../../common/buttons';
import { Input } from '../../common/fields';

import './LoginPage.css';
const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });

  console.log('🚀LoginPage ~ setFormValues', setFormValues);

  return (
    <div className='container'>
      <div className='form_container'>
        <div>Header</div>
        <div className='form_inner'>
          <div className='form_inner_input_container'>
            <Input
              isError={true}
              helperText='Щось не так'
              value={formValues.username}
              name='username'
              placeholder='Логін'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, username: event.target.value });
              }}
            />
          </div>
          <div className='form_inner_input_container'>
            <Input
              value={formValues.password}
              placeholder='Пароль'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, password: event.target.value });
              }}
            />
          </div>
          <div>
            <Button>Увійти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
