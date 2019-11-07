const express = require('express');


const app = express();

// plug middleware
app.use(express.json());

// catch-all endpoint
app.get('*', handleDefault)
function handleDefault(req, res) {
  {res.json('hello welcome to the Node-DB-IV Challenge with Jayne')}
}

// listen
app.listen(process.env.PORT || 6000, () => {
  console.log('listening on the server ' + (process.env.PORT || 6000));
})