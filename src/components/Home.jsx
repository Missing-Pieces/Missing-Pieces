import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CollectionPanel from './CollectionPanel';

const Home = () => {
  // const testArr = [
  //   {
  //     img:
  //       'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258096678-51Eiofu9mqL.jpg',
  //     title: 'Catan',
  //     id: 'OIXt3DmJU0',
  //   },
  //   {
  //     img:
  //       'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg',
  //     title: 'Spirit Island',
  //     id: 'kPDxpJZ8PD',
  //   },
  // ];

  const [gameList, setGameList] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api/collection')
      .then((response) => response.json())
      .then((data) => (Array.isArray(data) > 0 ? setGameList(data) : null))
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <>
      <Link to="/games">
        <Button variant="success">Search for games</Button>
      </Link>
      {gameList.length > 0 ? (
        <CollectionPanel gameList={gameList} />
      ) : (
        <Alert variant="warning">Login to add some games to your collection!</Alert>
      )}
    </>
  );
};

export default Home;
