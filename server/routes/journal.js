const express = require('express');
const fetch = require('node-fetch');
const JournalRouter = express.Router();

JournalRouter.get('/', function LogInHandler(_, res) {
  res.render();
});

JournalRouter.post('/', function JournalHandler(req, res) {
  
  const user = req.session.user;

  fetch('http://localhost:4000/tags/getAll', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user }),
  })
    .then(result => result.json())
    .then(result => {
      res.status(200).send(result);
    })
    .catch(e => {
      res.status(500).json({ error: 'Something went wrong!' });
    });

});

module.exports = JournalRouter;
