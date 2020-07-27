const db = require('../models/model');

const piecesController = {};

piecesController.getAllPiecesByGameId = (req, res, next) => {
  const queryGetAllPiecesByGameId = {
    text:
      'SELECT u.username, g.name, g.images, g.description, m.missing_piece FROM missing_pieces as m JOIN collection as c ON c._id = m.collection_id JOIN game as g ON g._id = c.game_id JOIN users as u ON c.users_id = u._id WHERE g._id = $1 AND m.type = $2 ORDER BY u._id',
    value: [req.params.game_id, 'have'],
  };
  db.query(queryGetAllPiecesByGameId).then((data) => {
    const userPieces = [];
    const gameDetails = {
      img: data.rows[0].images,
      title: data.rows[0].name,
      desc: data.rows[0].description,
    };

    data.rows.forEach((ele) => {
      userPieces.push();
    });
  });
};

module.exports = piecesController;
