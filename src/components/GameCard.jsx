import React, { useState } from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Dropdown from 'react-bootstrap/Dropdown';
import Collapse from 'react-bootstrap/collapse';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Container from 'react-bootstrap/container';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card key={game.id}>
      <Card.Img src={game.img} variant="top" />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
      </Card.Body>
      <Button variant="success">
        <Link to={`/parts/${game.id}`}>Search for Pieces</Link>
      </Button>
      <Button
        aira-expanded={String(open)}
        aria-controls={`savedPiecesDropDown-${game.id}`}
        variant="secondary"
        onClick={() => setOpen(!open)}
      >
        View Saved Pieces
        {/* This should maybe be an accordian? */}
      </Button>
      <Collapse in={open}>
        <div id={`savedPiecesDropDown-${game.id}`}>
          <Container className="pieceCreator">
            <Row>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle id="haveOrWantDropdown" variant="secondary">
                    Relation
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Have</Dropdown.Item>
                    <Dropdown.Item href="#">Want</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <textarea />
              </Col>
              <Col>
                <Button variant="secondary">SAVE PIECE</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </Card>
  );
};

export default GameCard;
