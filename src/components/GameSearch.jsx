import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
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
    <>
      <Row>
        <SearchBar
          label="Search for new games to add to your collection: "
          query={query}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </Row>
      <Row>{results.length > 0 && <Results results={results} />}</Row>
    </>
  );
};

export default GameSearch;
