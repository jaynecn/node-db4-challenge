const express = require('express');

const server = express();

const recipesRoutes = require('./recipes/recipes-router');

// plug middleware
server.use(express.json());
server.use('/api/recipes', recipesRoutes)

// catch-all endpoint
server.get('*', handleDefault)
function handleDefault(req, res) {
  {res.json('hello welcome to the Node-DB-IV Challenge with Jayne')}
}

// listen
server.listen(process.env.PORT || 6000, () => {
  console.log('listening on the server ' + (process.env.PORT || 6000));
})