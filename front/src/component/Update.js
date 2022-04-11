import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getConfig } from '../util';

const Update = ({ id }) => {
  const [taskinfo, setTaskInfo] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/task/:id', getConfig())
      .then((res) => setTaskInfo(res.data.data.todo));
  });
  return (
    <div className="input-form">
      <label htmlFor="password"></label>
      <input
        type="text"
        placeholder="Insert to change"
        id="password"
        value={taskinfo?.title}
      />
    </div>
  );
};

export default Update;
