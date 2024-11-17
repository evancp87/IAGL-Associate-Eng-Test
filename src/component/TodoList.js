import React, { Component } from 'react';
import Todo from './Todo';
import { fetchTodos, addNewTodo } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  state = {
    todoText: '',
  };

  // initial render of todos
  componentDidMount() {
    this.props.fetchTodos();
  }

  // rerender when todos data changes
  componentDidUpdate(prev) {
    if (prev.data.todos !== this.props.data.todos) {
      this.props.fetchTodos();
    }
  }

  handleAddTodo = async (e) => {
    try {
      e.preventDefault();
      if (this.state.todoText.trim()) {
        const task = { task: this.state.todoText };
        console.log(task, 'cehceienivrnui');
        await this.props.addNewTodo({ task: this.state.todoText });
        this.setState({ todoText: '' });
      }
    } catch (error) {
      console.error('There was an error adding the todo', error);
    }
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState({ todoText: text });
  };

  render() {
    const { todos } = this.props.data;
    console.log(todos, 'checing todos');
    return (
      <section className="todo">
        <div>
          <form action="" className="todo-form">
            <label htmlFor="todo">Add Todo</label>
            <textarea
              className="todo-form__text"
              onChange={this.handleChange}
              name="todo"
              id="todo"
            ></textarea>
            <button
              className="todo-form__btn"
              type="submit"
              onClick={this.handleAddTodo}
              aria-label="submit todo"
            >
              Add Todo
            </button>
          </form>

          <ul className="todo-list">
            {todos && todos.length
              ? todos.map((todo, index) => {
                  return <Todo key={`todo-${index}`} todo={todo.task} />;
                })
              : 'No todos, yay!'}
          </ul>
        </div>
      </section>
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
      addNewTodo,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
