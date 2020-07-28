const express = require('express');

const router = express.Router();
const piecesController = require('../controllers/piecesController');

router.get('/:game_id', piecesController.getAllPiecesByGameId);

module.exports = router;
