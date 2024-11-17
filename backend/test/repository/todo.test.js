const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [
        {
          task: 'This is a todo example',
        },
      ],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  }),
    it('should be able to add a new todo to the todolist', async () => {
      const { todos } = await repository.getTodos();

      const newTodo = { task: 'Hi, this is a new todo!' };

      todos.push(newTodo);

      const actual = await repository.getTodos();

      expect(actual.todos).toHaveLength(2);
      expect(actual.todos[1]).toEqual(newTodo);
    });
});
