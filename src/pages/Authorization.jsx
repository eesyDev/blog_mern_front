import React, { useState } from 'react';
import Register from '../components/Register';
import illustration from '../assets/login_illustration.svg';
import Login from '../components/Login';


const Authorization = () => {
  const [formType, setFormType] = useState('register')
  return (
    <div className='login'>
      <div className="login__wrapper">
        {
          formType === 'login' ? 
            <div className='form-inner'>
              <Login/>
            <div className="switcher">
                Don't have an account? <span onClick={() => setFormType('register')}>Register</span>
              </div>
            </div> : 
            <div className='form-inner'>
              <Register/>
              <div className="switcher">
                Already have an account? <span onClick={() => setFormType('login')}>Login</span>
              </div>
            </div>
        }
        <div className="login__illustration">
          <div className="login__illustration-txt">
            <h2 className="h2">Vasiliy Pupkin foreva</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio tenetur quaerat, rerum illum incidunt assumenda ducimus</p>
          </div>
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Authorization