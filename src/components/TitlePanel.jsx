import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const TitlePanel = ({ username }) => (
  <Container id="titlePanel">
    <Row>
      <Col xs={2}>Welcome, {username}!</Col>
      <Col xs={6}>
        <img
          alt="Missing Pieces logo"
          className="d-inline-block rounded"
          height="200"
          id="logo"
          src="../assets/chess.png"
          width="500"
        />
      </Col>
      <Col xs={2}>
        <br />
        <Button className="btnChessColor">
          <Link className="linkInBtns" to="/login">
            Login/Logout
          </Link>
        </Button>
      </Col>
      <Col xs={2}>
        <br />
        <Button variant="secondary">
          <Link className="linkInBtns" to="/">
            Home
          </Link>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default TitlePanel;
