const express = require('express');
const LoginRouter = express.Router();

LoginRouter.get('/', function SigninHandler(_, res) {
  res.send('Login Page');
});

module.exports = LoginRouter;
