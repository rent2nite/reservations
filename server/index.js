const express = require('express');
const path = require('path');
const { connection } = require('../database/db');

const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/reservations/bookings', (req, res) => {
  connection.query(`SELECT * FROM bookings WHERE bookings.property_id = "${req.query.property_id}"`, (error, results) => {
    if (error) throw (error);
    else res.send(results);
  });
});

app.get('/api/reservations/blackout_days', (req, res) => {
  connection.query(`SELECT * FROM blackout_days WHERE blackout_days.property_id = "${req.query.property_id}"`, (error, results) => {
    if (error) throw (error);
    else res.send(results);
  });
});

app.listen(port, () => console.log(`This app is listening on port ${port}!`));
