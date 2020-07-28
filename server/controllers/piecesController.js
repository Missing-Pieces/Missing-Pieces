const db = require('../models/model');

const piecesController = {};

piecesController.getAllPiecesByGameId = (req, res, next) => {
  const queryGetAllPiecesByGameId = {
    text:
      'SELECT u.username, g.name, g.images, g.description, m.missing_piece FROM missing_pieces as m JOIN collection as c ON c._id = m.collection_id JOIN game as g ON g._id = c.game_id JOIN users as u ON c.users_id = u._id WHERE g._id = $1 AND m.type = $2 ORDER BY u._id',
    value: [req.params.game_id, 'have'],
  };
  db.query(queryGetAllPiecesByGameId).then((data) => {
    const parts = { userPieces: [], gameDetails: {} };
    parts.gameDetails = {
      img: data.rows[0].images,
      title: data.rows[0].name,
      desc: data.rows[0].description,
    };

    const arrayOfAccountedUsers = [];

    for (let i = 0; i < data.rows.length; i += 1) {
      const currUser = data.rows[i];
      const tempObj = { username: currUser.username, pieces: [] };
      let accountedFor = false;
      let indexForEdit = 0;
      for (let j = 0; j < arrayOfAccountedUsers.length; j += 1) {
        if (currUser === arrayOfAccountedUsers[j]) accountedFor = true;
        indexForEdit += 1;
      }
      if (accountedFor) {
        parts.userPieces[indexForEdit - 1].pieces.push(currUser.missing_piece);
      } else {
        arrayOfAccountedUsers.push(currUser.username);
        tempObj.pieces.push(currUser.missing_piece);
        parts.userPieces.push(tempObj);
      }
    }
    res.locals.game = parts;
    return next();
  });
};

module.exports = piecesController;
