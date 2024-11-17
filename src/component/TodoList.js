import React, { Component } from 'react';
import Todo from './Todo';
import { fetchTodos, addTodo } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, index) => {
              return <Todo key={`todo-${index}`} todo={todo.task} />;
            })
          : 'No todos, yay!'}
      </ul>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchTodos,
      addTodo,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // {
  //   fetchTodos
  // }
)(TodoList);
