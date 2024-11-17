const express = require('express');
const cors = require('cors');
const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.use(express.urlencoded({ extended: false }));
  server.use('/api/todos', require('./routes/todos'));

  return server;
};
module.exports = server;
