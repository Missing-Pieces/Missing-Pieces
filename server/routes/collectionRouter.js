const express = require('express');

const router = express.Router();
const collectionController = require('../controllers/collectionController');
const gameController = require('../controllers/gameController');

router.post(
  '/:game_id',
  collectionController.addCollection,
  gameController.fetchGameById,
  gameController.addGame,
  (req, res) => {
    res.status(200).json(res.locals.game);
  },
);

module.exports = router;
