const express = require('express');
const app = express();
const msql = require('mysql');

const db = msql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud-database',
  port: 3306
});

app.get('/', (req, res) => {

  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inceptionnnn', 'Great movie!');";
  db.query(sqlInsert, (err, result) => {
    res.send('Hello World!fasgsdfgdgdsfgf'); npm
  });
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

