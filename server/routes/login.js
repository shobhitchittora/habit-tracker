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
    .then(result => result.json())
    .then(result => {
      if(result && result.user){
        req.session.user = result.user;
        res.send({ error: null, isLoggedIn: true, payload: result.user });
      }
    })
    .catch(e => {
      res.status(500).json({ error: 'Something went wrong!' });
    });

});

module.exports = LoginRouter;
