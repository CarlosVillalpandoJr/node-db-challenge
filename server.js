const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router');

const server = express();

server.use(helmet());
server.use(express.json())

server.get('/', (req, res) => res.send('<h2>WELCOME</h2>'))

server.use('/api/projects', ProjectsRouter)

module.exports = server;