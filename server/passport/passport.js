const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../models/model');

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/user/login/callback/',
    },
    (accessToken, refreshToken, profile, done) => {
      // UPDATE USER IN DATABASE
      // Callback after user has been authenticated
      // profile => Github profile data
      const createUserQuery = {
        text: 'INSERT INTO public.users(username) VALUES($1) RETURNING *',
        values: [profile.username],
      };
      const searchUserQuery = {
        text: 'SELECT _id, username FROM users WHERE username = $1',
        values: [profile.username],
      };
      db.query(searchUserQuery, (outerErr, outerResults) => {
        if (!outerResults.rows[0]) {
          db.query(createUserQuery, (innerErr, innerResults) =>
            done(innerErr, innerResults.rows[0]),
          );
        }
        console.log('outer results', outerResults.rows[0]);
        return done(outerErr, outerResults.rows[0]);
      });
      // db.query(createUserQuery, (err, data) => done(err, data.rows[0]));
    },
  ),
);

// MATCH SESSION TO USER
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  const findUserQuery = {
    text: 'SELECT * FROM users WHERE _id = $1',
    values: [id],
  };
  db.query(findUserQuery, (err, data) => done(null, data.rows));
});
