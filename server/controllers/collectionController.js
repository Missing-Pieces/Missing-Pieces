const db = require('../models/model');

const collectionController = {};

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

module.exports = collectionController;
