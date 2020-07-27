const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', passport.authenticate('github', { scope: ['read:user'] }));

router.get(
  '/login/callback',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login/failed',
  }),
);

router.get('/login/failed', (req, res) =>
  res.status(401).json({ message: 'user authentication failed' }),
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000');
});

module.exports = router;
