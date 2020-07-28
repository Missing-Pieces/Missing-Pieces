const express = require('express');

const router = express.Router();
const piecesController = require('../controllers/piecesController');

router.get('/:game_id', piecesController.getAllPiecesByGameId, (req, res) =>
  res.status(200).json(res.locals.game),
);

module.exports = router;
