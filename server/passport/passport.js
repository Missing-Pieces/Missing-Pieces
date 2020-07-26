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
      // User.findOneAndUpdate(
      //   { username: profile.username },
      //   { username: profile.username },
      //   { new: true, upsert: true, setDefaultsOnInsert: true },
      //   (err, user) => done(err, user),
      // );
      console.log(profile)
      let createUserQuery = {
        text: 'INSERT INTO public.users(username) VALUES($1) RETURNING *',
        values: [profile.username],
      };
      db.query(createUserQuery, (err, data) => {
        console.log(data.rows)
        return done(err, data.rows[0])
      })
    }
  ),
)
// MATCH SESSION TO USER
// User fields need to be updated for Postgres
// !!!!!!!!!
passport.serializeUser((user, done) => {
  console.log('this is user 8888888888888888888888888888888', user)
  done(null, user._id)
});

passport.deserializeUser((id, done) => {
  console.log('this is id ===================', id)
  const findUserQuery = {
    text: 'SELECT * FROM users WHERE _id = $1',
    values: [id],
  }
  db.query(findUserQuery, (err, data) => {
    return done(null, data.rows)
  })
})
  // User.findById(id)
  //   .then((user) => done(null, user))
  //   .catch((err) => console.log(`Deserialize Error: ${err}`)),
// );