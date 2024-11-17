const express = require('express');
const repository = require('../repository/todo');
const todoService = require('../service/todo')(repository);

const Router = express.Router();

Router.get('/todo', async (req, res) => {
  try {
    res.json(await todoService.getTodos());
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error processing the request:', error });
  }
});

Router.post('/add', async (req, res) => {
  try {
    let { todos } = (await repository.getTodos()) || [];

    const { task } = req.body;

    if (!task || typeof task !== 'string') {
      return res.status(400).json({ error: 'Invalid task' });
    }

    todos.push({ task });
    res.json(todos);
  } catch (error) {
    console.error('Error in /add:', error);
    res
      .status(500)
      .json({ message: 'There was an error adding the new todo:', error });
  }
});
module.exports = Router;
