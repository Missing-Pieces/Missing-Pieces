const db = require('../models/model');

const collectionController = {};

collectionController.addCollection = (req, res, next) => {
  console.log(
    'VALUES PASSED IN THROUGH BUTTON CLICK',
    req.params.game_id,
    req.session.passport.user,
  );
  const queryAddCollection = {
    text: 'INSERT INTO public.collection(game_id, users_id) VALUES($1, $2) RETURNING *',
    values: [req.params.game_id, req.session.passport.user],
  };
  console.log('BIG BOSS QUERY', queryAddCollection);
  db.query(queryAddCollection).then((results) => {
    // console.log(res.locals.collection);
    console.log('results -------->', results);
    // if (err) return next(err);
    // res.locals.collection = results.rows[0];
    // return next();
  });
};

module.exports = collectionController;
