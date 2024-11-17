import React from 'react';
import TodoList from './component/TodoList';
import './styles/app.css';

export default function TodoApp() {
  return (
    <main className="todo-app">
      <h1>Todo List</h1>
      <TodoList />
    </main>
  );
}
