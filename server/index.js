const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

const APP_PORT = process.env.PORT || 8080;
const ASSET_PATH = path.join(__dirname, '../client/build');

app.use(express.static(ASSET_PATH));

app.use(function attachRender(_, res, next) {
  res.render = function renderer() {
    res.sendFile(path.join(ASSET_PATH, 'index.html'));
  }
  next();
});


if (routes) {
  Object.keys(routes).forEach((route) => {
    app.use(`/${route}`, routes[route]);
  });
}

app.get('*', function (_, res) {
  res.render();
});

app.listen(APP_PORT, () => {
  console.log(`Server running on ${APP_PORT}`);
});