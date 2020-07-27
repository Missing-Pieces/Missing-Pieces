const express = require('express');

const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/missing_pieces', gameController.getHaveMissingPieces, (req, res, next) => {
  res.status(200).json(res.locals.have_missing_pieces);
});

router.get('/', gameController.getGameInfo, (req, res) => {
  res.status(200).json(res.locals.games);
});

module.exports = router;
