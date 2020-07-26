const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('query -------------->', text)
    return pool.query(text, params, callback)
  }
}
