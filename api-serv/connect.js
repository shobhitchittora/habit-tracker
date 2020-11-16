const { Client } = require('pg');


const connect = () => {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  client.query(`
    CREATE TABLE users ( 
      user_id serial PRIMARY KEY,
      name VARCHAR ( 50 ) UNIQUE NOT NULL,
      password VARCHAR ( 50 ) NOT NULL,
      email VARCHAR ( 255 ) UNIQUE NOT NULL,
      created_on TIMESTAMP NOT NULL
    )
    `, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

}


module.exports = {
  connect
}
