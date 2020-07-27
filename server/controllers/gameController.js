const fetch = require('node-fetch');
const db = require('../models/model');

const gameController = {};

gameController.getHaveMissingPieces = (req, res, next) => {
  const getMissingQuery = {
    text:
      'SELECT u.username, g.name, h.* FROM have_missing_pieces AS h JOIN game AS g ON g._id = h.game_id JOIN users AS u ON u._id = h.users_id WHERE h.game_id = $1',
    values: [req.body.game.id],
  };
  db.query(getMissingQuery)
    .then((data) => {
      res.locals.have_missing_pieces = data.rows[0];
      next();
    })
    .catch((error) => next({ error }));
};

gameController.getGameInfo = (req, res, next) => {
  fetch('https://www.boardgameatlas.com/api/search?name=Cata&client_id=JLBr5npPhV&fuzzy_match=true')
    .then((data) => data.json())
    .then((body) => {
      res.locals.games = body.games.map(
        ({ name, id, year_published, images, description, primary_publisher }) => ({
          name,
          id,
          year_published,
          images: images.original,
          description,
          publisher: primary_publisher,
        }),
      );
      return next();
    });
};

module.exports = gameController;
