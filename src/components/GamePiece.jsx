import React from 'react';

const GamePiece = ({ piece: { type, desc } }) => (
  <p>
    <span className={type}>{type.toUpperCase()}</span>
    {` ${desc}`}
  </p>
);

export default GamePiece;
