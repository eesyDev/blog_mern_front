import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../redux/services/authApi';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [regUser, { data, error }] = useRegisterMutation();
  
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    // fullName: values.fullName
  });

  const onSubmit = async (values) => {
    let fullName = values.fullName;
    let email = values.email;
    let password = values.password;

    const userData = {fullName, email, password}

    const response = await regUser(userData);

    console.log(response)
  }

  return (
    <div className='login__form'>
      <h1 className="login__form-title h1">Create an account</h1>
      <form action="" className="form register-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full Name"
          fullWidth
          className='field'
          { ...register('fullName', { required: 'Put valid name' }) }
        />
        <TextField
          label="Email"
          fullWidth
          className='field'
          { ...register('Email', { required: 'Put valid email' }) }
        />
        <TextField
          label="Password"
          fullWidth
          className='field'
          { ...register('Password', { required: 'Put valid password' }) }
        />
        <div className="register-submit">
          <button className="btn btn--primary">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register