import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todo }) => (
  <li className="todo-list-item">
    <span className="todo-list-item__text">{todo}</span>
  </li>
);

// export default Todo;
export default connect(null)(Todo);
