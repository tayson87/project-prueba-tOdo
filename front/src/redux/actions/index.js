import axios from 'axios';
import { getConfig } from '../../util';

export const setTask = (task) => ({
  type: 'SET_TASK',
  payload: task
});

export const postCreateTask = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:4000/api/v1/task', getConfig())
      .then((res) => dispatch(setTask(res.data.data.todos)));
  };
};

export const createUser = (users) => {
  return (dispatch) => {
    axios
      .post('http://localhost:4000/api/v1/users', users, getConfig())
      .then((res) => dispatch(res.data.newUser.users));
  };
};

export const updatetask = (newTask, id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:4000/api/v1/task/${id}`, newTask, getConfig())
      .then((res) => dispatch(postCreateTask()));
  };
};
