const express = require('express');
const fetch = require('node-fetch');
const LoginRouter = express.Router();

LoginRouter.get('/', function LogInHandler(_, res) {
  res.render();
});

LoginRouter.post('/', function LogInPostHandler(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  fetch('http://localhost:4000/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(e => console.error(e));

  res.end();
});

module.exports = LoginRouter;
