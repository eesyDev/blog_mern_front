import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../redux/slices/authSlice';
import { useRegisterMutation } from '../redux/services/authApi';

const Register = () => {
  const [regUser, { data, error }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({mode: 'onChange'});

  const onSubmit = async (values) => {
    let fullName = values.fullName;
    let email = values.email;
    let password = values.password;

    const userData = {fullName, email, password}

    const response = await regUser(userData);
    dispatch(login({data: response?.data, isLoggedIn: true}))
    if (response?.data?.token !== undefined) {
      localStorage.setItem('token', response?.data?.token)
    } else {
      alert('Auth failed')
    }

    navigate('/')
  }

  return (
    <div className='login__form'>
      <h1 className="login__form-title h1">Create an account</h1>
      <form action="" className="form register-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full Name"
          fullWidth
          className='field'
          helperText={errors.fullName?.message}
          error={Boolean(errors.fullName?.message)}
          { ...register('fullName', { required: 'Put valid name' }) }
        />
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
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
          { ...register('password', { required: 'Put valid password' }) }
        />
        <div className="register-submit">
          <button className="btn btn--primary">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register