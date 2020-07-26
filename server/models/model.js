const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE,
});

module.exports = {
  query: (text, params, callback) => {
    // eslint-disable-next-line no-console
    console.log('query -------------->', text);
    return pool.query(text, params, callback);
  },
};
