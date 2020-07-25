/* eslint-disable no-console */
const path = require('path');
const express = require('express');

require('dotenv').config();

// CREATE APP
const app = express();
const PORT = process.env.PORT || 3000;

// PARSE REQUEST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ----- ENDPOINT ROUTES ----- */

// STATIC ASSETS
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ----- ERROR HANDLING ----- */

// Catch-all route handler
app.use((req, res) => res.sendStatus(404));

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
console.log(`Current NODE_ENV: ${process.env.NODE_ENV}`);
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
