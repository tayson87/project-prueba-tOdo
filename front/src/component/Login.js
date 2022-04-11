import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const NameForm = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState(' ');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSetRole = (data) => {
    dispatch({ type: 'SET_ROLE', payload: data });
  };

  const submit = (data) => {
    axios
      .post('http://localhost:4000/api/v1/users/login/', data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        handleSetRole(res.data.data.userRole);
        if (res.data.data.userRole === 'admin') {
          navigate('/profileAdmin');
        } else {
          navigate('/profileOperator');
        }
      })
      .catch(() => setLoginError('credencials incorrect'));
  };

  return (
    <div className="content">
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="input _container1">
          <label htmlFor="email"></label>
          <input className='input_container2' {...register('email')} type="email" placeholder='Insert to Email' required />
        </div>
        <div className="input_container">
          <label className='lbpas' htmlFor="password"></label>
          <input className='inp_pass' {...register('password')} type="password" placeholder='Insert to Password' required />
        </div>
        {loginError}
        <button className='btnlog'>Log In</button>
      </form>
    </div>
  );
};

export default NameForm;
