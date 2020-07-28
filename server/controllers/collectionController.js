const db = require('../models/model');

const collectionController = {};

collectionController.loadCollection = (req, res, next) => {
  const queryLoadCollection = {
    text:
      'SELECT g.name, g._id, g.images, m.missing_piece, m.type FROM missing_pieces as m FULL JOIN collection as c ON c._id = m.collection_id FULL JOIN game as g ON g._id = c.game_id FULL JOIN users as u ON c.users_id = u._id WHERE u._id = $1 ORDER BY g._id',
    values: [req.session.passport.user],
  };
  db.query(queryLoadCollection).then((data) => {
    const { rows } = data;
    const output = [];
    const len = rows.length - 1;
    for (let i = 0; i < len; i += 1) {
      const { name, _id, images, missing_piece } = rows[i];
      const game = { id: _id, name, img: images, pieces: [] };
      if (missing_piece !== null) {
        do {
          const desc = rows[i].missing_piece;
          const { type } = rows[i];
          game.pieces.push({ type, desc });
          i += 1;
        } while (rows[i]._id === _id);
        i -= 1;
      }
      output.push(game);
    }
    res.locals.collections = output;
    return next();
  });
};

collectionController.getCollection = (req, res, next) => {
  const queryGetCollection = {
    text: 'SELECT collection._id FROM collection WHERE game_id = $1 AND users_id = $2',
    values: [req.params.game_id, req.session.passport.user],
  };
  db.query(queryGetCollection)
    .then((data) => {
      res.locals.collection = data.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

collectionController.addCollection = (req, res, next) => {
  const queryAddCollection = {
    text: 'INSERT INTO public.collection(game_id, users_id) VALUES($1, $2) RETURNING *',
    values: [req.params.game_id, req.session.passport.user],
  };
  db.query(queryAddCollection)
    .then((data) => {
      console.log('Game successfully added to collection');
      res.locals.collection = data.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

collectionController.addPieces = (req, res, next) => {
  const queryAddPieces = {
    text:
      'INSERT INTO public.missing_pieces(collection_id, type, missing_piece) VALUES($1, $2, $3) RETURNING *',
    values: [res.locals.collection._id, 'have', 'some description'],
  };
  db.query(queryAddPieces)
    .then((data) =>
      // console.log('Game successfully added to collection');
      // res.locals.collection = data.rows[0];
      next(),
    )
    .catch((err) => next(err));
};

module.exports = collectionController;
