const express = require('express');

const router = express.Router();
const collectionController = require('../controllers/collectionController');
const gameController = require('../controllers/gameController');

router.post(
  '/:game_id',
  gameController.fetchGameById,
  gameController.addGame,
  collectionController.addCollection,
  (req, res) => {
    res.status(200).json(res.locals.collection);
  },
);

module.exports = router;
