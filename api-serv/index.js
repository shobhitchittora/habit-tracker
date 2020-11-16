const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('./connect');

dotenv.config();
const app = express();

const PORT = process.env.API_SERV_PORT || 4000;

app.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
  connect();
});