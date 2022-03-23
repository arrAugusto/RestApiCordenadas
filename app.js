const Server = require('./Models/server');

require('dotenv').config();

const server = new Server();
server.listen();

