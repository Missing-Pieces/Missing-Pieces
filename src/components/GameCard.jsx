import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Collapse from 'react-bootstrap/collapse';
import Container from 'react-bootstrap/container';
import GamePiece from './GamePiece';

const GameCard = ({ game }) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('want');

  const handlePieceAdd = (e) => {
    e.preventDefault();

    fetch(`api/collection/pieces/${game.id}`, {
      method: 'POST',
      body: JSON.stringify({ type, desc }),
    })
      .then((response) => response.json())
      .then((data) => {
        const msg = data.success ? 'Piece added!' : 'Error adding piece';
        setDesc('');
        alert(msg);
      })
      .catch((err) => err);
  };

  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  const handleRadio = (e) => {
    setType(e.target.value);
  };

  let { pieces } = game;
  if (Array.isArray(pieces)) {
    pieces = pieces.map((piece) => <GamePiece key={`${piece.type}-${piece.desc}`} piece={piece} />);
  }

  return (
    <Card key={game.id}>
      <Card.Img src={game.img} variant="top" />

      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
      </Card.Body>

      <Link to={`/parts/${game.id}`}>
        <Button variant="secondary">Search for Pieces</Button>
      </Link>

      <Button
        aira-expanded={String(open)}
        aria-controls={`savedPiecesDropDown-${game.id}`}
        variant="info"
        onClick={() => setOpen(!open)}
      >
        View Saved Pieces
      </Button>

      <Collapse in={open}>
        <div id={`savedPiecesDropDown-${game.id}`}>
          <Container className="pieceCreator">
            <form onSubmit={handlePieceAdd}>
              <input
                required
                placeholder="Enter your piece description"
                type="text"
                value={desc}
                onChange={handleChange}
              />
              <label>
                <input checked={type === 'want'} type="radio" value="want" onChange={handleRadio} />
                Want
              </label>
              <label>
                <input checked={type === 'have'} type="radio" value="have" onChange={handleRadio} />
                Have
              </label>
              <input type="submit" value="Add Piece" />
            </form>
          </Container>
          {pieces}
        </div>
      </Collapse>
    </Card>
  );
};

export default GameCard;
