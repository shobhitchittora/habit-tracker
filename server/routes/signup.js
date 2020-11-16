const express = require('express');
const SignupRouter = express.Router();

SignupRouter.get('/', function SignUpHandler(_, res) {
  res.render();
});

module.exports = SignupRouter;
