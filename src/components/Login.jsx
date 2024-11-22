import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/services/authApi';

const Login = () => {
  const [loginUser, { data, error }] = useLoginMutation();
  const navigate = useNavigate();

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm();

  const onSubmitLogin = async (values, event) => {
    event.preventDefault();
    let email = values.email;
    let password = values.password;

    const userData = {email, password}

    const response = await loginUser(userData);

    console.log(response)
    navigate('/')
  }
  return (
    <div className='login__form'>
      <h1 className="login__form-title h1">Log in</h1>
      <form action="" className="form register-form" onSubmit={handleSubmit(onSubmitLogin)}>
      <TextField
          label="Email"
          fullWidth
          className='field'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          { ...register('email', { required: 'Put valid email' }) }
        />
        <TextField
          label="Password"
          fullWidth
          className='field'
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          { ...register('password', { required: 'Put valid password' }) }
        />
        <div className="register-submit">
          <button className="btn btn--primary">Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default Login