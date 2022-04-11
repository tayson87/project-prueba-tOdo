import React from 'react';
import { useState } from 'react';
import { getConfig } from '../util';
import axios from 'axios';

const CreateTask = ({ setShowList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setShowList(false);
    const task = {
      title,
      description,
      userId
    };
    axios
      .post('http://localhost:4000/api/v1/task', task, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    console.log(task);
    setTimeout(() => {
      setShowList(true);
    }, 1000);
  };

  return (
    <>
      <form className="user-formUser" onSubmit={submit}>
        <div className="input-form1">
          <label htmlFor="title"></label>
          <input
            type="text"
            placeholder="Insert to Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-form1">
          <label htmlFor="description"></label>
          <input
            type="text"
            placeholder="Insert to description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-form1">
          <label htmlFor="userId"></label>
          <input
            type="number"
            placeholder="Insert to UserId"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button className="submit">submit</button>
      </form>
      <h2 className="title-task"> Create Task</h2>
    </>
  );
};

export default CreateTask;
