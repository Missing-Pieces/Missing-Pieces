import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const PartSearch = ({ match }) => {
  const [game, setGame] = useState(null);
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    fetch(`/api/pieces/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        const { userPieces, gameDetails } = data;
        if (Array.isArray(userPieces)) setPieces(userPieces);
        if (typeof gameDetails === 'object') setGame(gameDetails);
      })
      .catch((err) => console.log(err));
  });

  return game === null ? (
    <>
      <Spinner animation="border" role="status" variant="info">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  ) : (
    <>
      <Jumbotron fluid>
        <img alt="Box Art" src={game.img} style={{ display: 'inline-block' }} />
        <h2>{game.title.toUpperCase()}</h2>
        <p>{game.desc}</p>
      </Jumbotron>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Username</th>
            <th>Pieces</th>
          </tr>
        </thead>
        <tbody>
          {pieces.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.pieces.reduce((acc, curr) => `${acc}\n${curr}`)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PartSearch;
