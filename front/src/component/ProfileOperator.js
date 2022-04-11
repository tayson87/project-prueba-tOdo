import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListTask from './ListTask';

const ProfileOperator = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem('token', '');
    navigate('/');
  };

  return (
    <div>
      <h1>Profile Operator</h1>
      <button onClick={logOut}>Log Out</button>
      <ListTask />
    </div>
  );
};

export default ProfileOperator;
