import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const TitlePanel = ({ username }) => (
  <Navbar className="bg-secondary">
    <Navbar.Text>Welcome, {username}!</Navbar.Text>
    <Navbar.Brand>
      <img alt="Missing Pieces logo" className="d-inline-block rounded" src="../assets/chess.png" />
    </Navbar.Brand>
    <Button variant="danger">
      <Link to="/login">Login</Link>
    </Button>
    <Button variant="info">
      <Link to="/">Logout [fake]</Link>
    </Button>
    <Button variant="warning">
      <Link to="/">Home</Link>
    </Button>
  </Navbar>
);

export default TitlePanel;
