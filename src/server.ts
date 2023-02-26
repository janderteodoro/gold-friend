import express from 'express';

const server = express();

server.get('/', (_, response) => {
  response.json({
    hello: 'world'
  });
});

export default server;