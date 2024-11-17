const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);
const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.use(express.urlencoded({ extended: false }));

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/add', async (req, res) => {
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
  return server;
};
module.exports = server;
