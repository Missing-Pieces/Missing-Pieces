const express = require('express');

const router = express.Router();
const gameController = require('../controllers/gameController');

router.get(
  '/game',
  (gameController.getHaveMissingPieces = (req, res, next) => {
    res.status(200).json(res.locals.have_missing_pieces);
  }),
);

module.exports = router;
