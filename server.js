const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json")

const PORT = process.env.PORT || 3400;

server.use(middlewares);
server.use(router)
server.listen(PORT)