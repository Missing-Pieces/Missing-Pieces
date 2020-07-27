const express = require('express');

const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getGameInfo, (req, res) => {
  res.status(200).json(res.locals.games);
});

// router.post('/collection', gameController.addGames, (req, res) => {
//   res.status(200).json(res.locals.games);
// });
module.exports = router;
