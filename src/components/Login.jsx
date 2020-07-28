import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const handleLogin = () => window.open('http://localhost:3000/api/user/login', '_self');

const handleLogout = () =>
  fetch('/api/user/logout')
    .then(() => window.open('http://localhost:3000', '_self'))
    .catch((err) => console.log(err));

const Landing = () => (
  <Container id="loginContainer">
    <Card className="loginCard">
      <Card.Body>
        <Card.Title>Welcome to Missing Pieces</Card.Title>
        <Button id="OauthBtn" onClick={handleLogin}>
          Login via Github
        </Button>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
        <Card.Text>Please login to view game pieces available for trade.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Landing;
