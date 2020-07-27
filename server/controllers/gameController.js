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
          img: images.original,
          description,
          primary_publisher,
        }),
      );
      return next();
    });
};

gameController.fetchGameById = (req, res, next) => {
  fetch(
    `https://www.boardgameatlas.com/api/search?ids=${res.locals.collection.game_id}&pretty=true&client_id=JLBr5npPhV`,
  )
    .then((data) => data.json())
    .then((body) => {
      const { name, id, year_published, images, description, primary_publisher } = body.games[0];
      res.locals.game = {
        name,
        id,
        year_published,
        img: images.original,
        description,
        primary_publisher,
      };
      return next();
    });
};

gameController.addGame = (req, res, next) => {
  const { name, id, year_published, img, description, primary_publisher } = res.locals.game;
  const addGameQuery = {
    text:
      'INSERT INTO public.game(name, _id, years_published, images, description, primary_publisher ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [name, id, year_published, img, description, primary_publisher],
  };
  db.query(addGameQuery, (err, results) => {
    console.log(results);
    if (err) return next(err);
    console.log('Game has successfully been added');
    return next();
  });
};
module.exports = gameController;
