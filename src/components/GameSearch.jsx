import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import Results from './Results';

const GameSearch = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = query.split(' ').join('%20');
    setQuery('');

    fetch(`/api/games?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  };

  return (
    <Container id="GameSearchPanel">
      <Row>
        <Col>
          <SearchBar
            label="Search for new games to add to your collection: "
            query={query}
            onChange={handleChange}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>{results.length > 0 && <Results results={results} />}</Col>
      </Row>
    </Container>
  );
};

export default GameSearch;
