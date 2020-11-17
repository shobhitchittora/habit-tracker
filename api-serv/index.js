const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const loadDB = require('./lib/db');
const { getUser, getAllTags } = require('./api');

dotenv.config();

const app = express();
const pool = loadDB();
const query = pool.query.bind(pool);

const PORT = process.env.API_SERV_PORT || 4000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
});


app.post('/users/auth', async (req, res) => {
  try {
    const response = await getUser(query, req.body);
    if (response && !response.length) {
      res.status(204).json({ error: 'No user found!', user: null })
    }
    res.status(200).json({ error: null, user: response[0] });
  } catch {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.post('/tags/getAll', async (req, res) => {
  const user = req.body.user;
  if (!user) {
    res.status(401).send({ error: 'Unauthorized' });
  }
  try {
    const response = await getAllTags(query);
    res.status(200).json({ error: null, tags: response });
  } catch {
    res.status(500).json({ error: 'Something went wrong' });
  }
});