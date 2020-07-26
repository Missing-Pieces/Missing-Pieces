import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const handleLogin = () => window.open('http://localhost:3000/login/github', '_self');

const Landing = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>Welcome to Missing Pieces</Card.Title>
        <Button variant="primary" onClick={handleLogin}>
          Login via Github
        </Button>
        <Card.Text>Please login to view game pieces available for trade.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Landing;
