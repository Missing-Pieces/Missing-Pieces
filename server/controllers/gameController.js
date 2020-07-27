const fetch = require('node-fetch');
const db = require('../models/model');

const gameController = {};

gameController.getGameInfo = (req, res, next) => {
  fetch(
    `https://www.boardgameatlas.com/api/search?name=${req.query.query}&client_id=JLBr5npPhV&fuzzy_match=true`,
  )
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
