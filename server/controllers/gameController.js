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
module.exports = gameController;
