const express = require('express');

const dishRouter = require('./router/dish-router.js');
const recipeRouter = require('./router/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/dish', dishRouter)
server.use('/api/recipe', recipeRouter)


const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
