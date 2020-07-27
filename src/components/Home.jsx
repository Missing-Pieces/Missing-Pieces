import React from 'react';
import CollectionPanel from './CollectionPanel';

const Home = () => (
  <CollectionPanel
    gameList={[
      {
        img:
          'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258096678-51Eiofu9mqL.jpg',
        title: 'Catan',
        id: 'OIXt3DmJU0',
      },
    ]}
  />
);

export default Home;
