import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatetask } from '../redux/actions';
import { postCreateTask } from '../redux/actions';
import { useState } from 'react';
import Update from './Update';

const ListTask = () => {
  const [showmodel, setShowModel] = useState(false);

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(updatetask(data.task));
  };

  const task = useSelector((state) => state.task.listTask);
  console.log(task);

  useEffect(() => {
    dispatch(postCreateTask());
  }, [dispatch]);

  return (
    <div className="list-task">
      {task?.map((task) => (
        <li className="task-item" key={task?.id}>
          <strong>{task.user?.name}</strong>
          <ul className="list-create">
            <li>Title: {task.title}</li>
            <li>Description: {task.description}</li>
            <li>Id: {task.id}</li>
            <li>Status: {task.status}</li>
            <button onClick={() => setShowModel(!showmodel)}>Edit</button>
          </ul>
          {showmodel && <Update id={task.id} />}
        </li>
      ))}
    </div>
  );
};

export default ListTask;
