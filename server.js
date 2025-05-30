const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("data.json")

const PORT = process.env.PORT || 8080;
console.log(PORT)
server.use(middlewares);
server.use(router)
server.listen(PORT)