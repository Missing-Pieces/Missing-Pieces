/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const redis = require('redis');
const userRouter = require('./routes/userRouter');
const gameRouter = require('./routes/gameRouter');
const collectionRouter = require('./routes/collectionRouter');
const piecesRouter = require('./routes/piecesRouter.js');

// Passport file contains our GITHUB_CLIENT_ID, COOKIE_SECRET, & cbURL
require('./passport/passport');
require('dotenv').config();

// Implemented Redis client
const redisClient = redis.createClient(process.env.REDIS_URL, {
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

// ms * sec * min * hours * days
const SESSION_EXPIRY = 1000 * 60 * 60 * 24 * 7; // 1 week

// CREATE APP
const app = express();
const PORT = process.env.PORT || 3000;

// CREATES SESSION
app.use(
  session({
    store: new RedisStore({
      client: redisClient,
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: SESSION_EXPIRY },
  }),
);

// PARSE REQUEST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PASSPORT LAUNCH
app.use(passport.initialize());
app.use(passport.session());

// CORS FOR AUTHENICATION AND CREDENTIALS
app.use(cors());
app.options('*', cors());

/* ----- ENDPOINT ROUTES ----- */

// USER AUTHENTICATION
app.use('/api/user', userRouter);

app.use('/api/games', gameRouter);

app.use('/api/collection', collectionRouter);

app.use('/api/pieces', piecesRouter);

// STATIC ASSETS
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ----- ERROR HANDLING ----- */

// Catch-all route handler
app.use((req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'EXPRESS ERROR: handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occured' },
  };
  const error = { ...defaultErr, ...err };
  console.log(err.log);
  return res.status(error.status).json(error.message);
});

// LAUNCH
// console.log(`Current NODE_ENV: ${process.env.NODE_ENV}`);
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
