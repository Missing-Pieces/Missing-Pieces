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
          src="../assets/chess.png"
          width="500"
        />
      </Col>
      <Col xs={4}>
        <Button variant="danger">
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="info">
          <Link to="/">Logout [fake]</Link>
        </Button>
        <Button variant="warning">
          <Link to="/">Home</Link>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default TitlePanel;
