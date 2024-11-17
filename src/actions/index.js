import axios from 'axios';
import { FETCH_TODOS, ADD_TODO } from './types';

export const fetchTodos = () => (dispatch) => {
  return axios.get('http://localhost:9091/api/todos/todo').then(({ data }) => {
    dispatch(setTodos(data));
  });
};
export const addNewTodo = (task) => (dispatch) => {
  console.log(task, 'checking the task');
  return axios
    .post('http://localhost:9091/api/todos/add', task)
    .then((task) => {
      dispatch(addTodo(task));
      return task;
    });
};

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

export function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: data,
  };
}
