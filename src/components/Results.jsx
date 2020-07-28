import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const handleGameAdd = (e) => {
  fetch(`/api/collection/${e.target.id}`, { method: 'POST' })
    .then((response) => response.json())
    .then((data) => {
      const outcome = data.success ? 'Game added!' : 'There was an error adding this game.';
      // eslint-disable-next-line no-alert
      alert(outcome);
    })
    .catch((err) => console.log(err));
};

const Results = ({ results }) => (
  <>
    {results.map((game) => (
      <Card key={game.id}>
        <Card.Img src={game.img} variant="top" />
        <Card.Title>{game.name.toUpperCase()}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Year: {game.year_published}</ListGroupItem>
          <ListGroupItem>Publisher: {game.primary_publisher}</ListGroupItem>
        </ListGroup>
        <Button id={game.id} variant="success" onClick={handleGameAdd}>
          Add to Collection
        </Button>
      </Card>
    ))}
  </>
);

export default Results;
