import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import CreateTask from './CreateTask';
import ListTask from './ListTask';
import { useState } from 'react';

const ProfileAdmin = () => {
  const [showList, setShowList] = useState(true);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem('token', '');
    navigate('/');
  };

  return (
    <div className="input-container">
      <button onClick={logOut}>Log Out</button>
      <UserForm />
      <CreateTask setShowList={setShowList} />
      {showList && <ListTask />}
    </div>
  );
};

export default ProfileAdmin;
