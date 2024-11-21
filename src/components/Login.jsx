import React from 'react';
import { TextField } from '@mui/material';

const Login = () => {
  return (
    <div className='login__form'>
      <h1 className="login__form-title h1">Log in</h1>
      <form action="" className="form register-form">
        <TextField
          label="Email"
          fullWidth
          className='field'
        />
        <TextField
          label="Password"
          fullWidth
          className='field'
        />
        <div className="register-submit">
          <button className="btn btn--primary">Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default Login