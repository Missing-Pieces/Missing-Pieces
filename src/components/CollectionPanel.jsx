import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';

const CollectionPanel = ({ gameList }) => {
  const gameCards = gameList.map((game) => (
    <Card key={game.id}>
      <Card.Img src={game.img} variant="top" />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
      </Card.Body>
      <Button variant="success">
        <Link to={`/parts/${game.id}`}>Search for Pieces</Link>
      </Button>
      <Button variant="secondary">
        View Saved Pieces
        {/* This should maybe be an accordian? */}
      </Button>
    </Card>
  ));

  return (
    <Container>
      <Row>
        <h2>Collection</h2>
        <Button variant="danger">
          <Link to="/games">Search for games</Link>
        </Button>
      </Row>
      <Row>{gameCards}</Row>
    </Container>
  );
};

export default CollectionPanel;
