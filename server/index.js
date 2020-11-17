const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routes = require('./routes');


const APP_PORT = process.env.PORT || 8080;
const ASSET_PATH = path.join(__dirname, '../client/build');

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
  key: 'session_id',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use(express.static(ASSET_PATH));

app.use(function attachRender(_, res, next) {
  res.render = function renderer() {
    res.sendFile(path.join(ASSET_PATH, 'index.html'));
  }
  next();
});

app.use((req, res, next) => {
  if (req.cookies.session_id && !req.session.user) {
    res.clearCookie('session_id');
  }
  next();
});

// const authCheck = (req, res, next) => {
//   if (req.session.user && req.cookies.session_id) {
//     res.redirect('/today');
//   } else {
//     next();
//   }
// };


// Protected Routes
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