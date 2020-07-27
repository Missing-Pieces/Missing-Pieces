import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import GameCard from './GameCard';

const CollectionPanel = ({ gameList }) => {
  const gameCards = gameList.map((game) => <GameCard game={game} key={game.id} />);

  return (
    <Container id="collectionPanel">
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <h2>Collection</h2>
          <Button variant="danger">
            <Link to="/games">Search for games</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{gameCards}</Col>
      </Row>
    </Container>
  );
};

export default CollectionPanel;
