import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitlePanel from './components/TitlePanel';
import Home from './components/Home';
import Login from './components/Login';
import GameSearch from './components/GameSearch';
import PartSearch from './components/PartSearch';
import NoMatch from './components/NoMatch';

const App = () => (
  <Container>
    <Router>
      <Row>
        <TitlePanel />
      </Row>
      <Row>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Login} path="/login" />
          <Route exact component={GameSearch} path="/games" />
          <Route component={PartSearch} path="/parts/:id" />
          <Route component={NoMatch} />
        </Switch>
      </Row>
    </Router>
  </Container>
);

export default App;
