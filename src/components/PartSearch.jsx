import React from 'react';

// TODO: Refactor to Bootsrap Components
const PartSearch = ({ match }) => (
  <div className="col-8">
    {/* Might not want this as a jumbotron. Maybe more like a div */}
    <div className="jumbotron jumbotron-fluid">
      <div className="row">
        <div className="col-4">
          <img alt="Box Art" src="#" />
        </div>
        <div className="col-8">
          <h3>GAME TITLE</h3>
          <h6>Game Description and Other Info</h6>
        </div>
      </div>
    </div>
    <h1>{match.params.id}</h1>
    {/* Search Results in the form of a table */}
    <table className="table">
      <thead>
        <tr>
          <th>User Information</th>
          <th>Pieces</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DATA For User</td>
          <td>COLLECTION OF PIECES WILLING TO GIVE</td>
        </tr>
        <tr>
          <td>DATA For User</td>
          <td>COLLECTION OF PIECES WILLING TO GIVE</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PartSearch;
