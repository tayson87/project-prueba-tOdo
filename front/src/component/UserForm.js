import React from 'react';
import { useState } from 'react';
import { createUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

const UserForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const submit = (e, data) => {
    const f = new FormData();

    for (let i = 0; i < image.length; i++) {
      f.append('image', image[i]);
    }
    e.preventDefault();
    dispatch(createUser(data.newUser.users));
  };

  return (
    <>
      <form className="user-form" onSubmit={submit}>
        <div className="input-form">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Insert to Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="lastName"></label>
          <input
            type="text"
            placeholder="Insert to LastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="age"></label>
          <input
            type="number"
            placeholder="Insert to Age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder="Insert to Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Insert to Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="role"></label>
          <input
            type="text"
            placeholder="Insert to Role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="image">image</label>
          <input
            type="file"
            placeholder="Insert to Image"
            id="image"
            files={image}
            onChange={(e) => setImage(e.target.files)}
          />
        </div>

        <button className="submit1">submit</button>
      </form>
      <h2 className="title-form">New User</h2>
    </>
  );
};

export default UserForm;
