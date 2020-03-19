const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const faker = require('faker');
const { connection } = require('../database/db');

const app = express();
const port = 3001;
const jsonParser = bodyParser.json();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/reservations/properties', (req, res) => {
  connection.query(`SELECT * FROM properties WHERE property_id = "${req.query.property_id}"`, (error, results) => {
    if (error) throw error;
    else res.send(results);
  });
});

app.get('/api/reservations/bookings', (req, res) => {
  connection.query(`SELECT * FROM bookings WHERE bookings.property_id = "${req.query.property_id}"`, (error, results) => {
    if (error) throw error;
    else res.send(results);
  });
});

app.post('/api/reservations/bookings', jsonParser, (req, res) => {
  const uuid = faker.random.uuid();
  const booking = { ...{ booking_id: uuid }, ...req.body };
  connection.query('INSERT INTO bookings SET ?', booking, (error) => {
    if (error) throw error;
    else res.send(uuid);
  });
});

app.get('/api/reservations/blackout_days', (req, res) => {
  connection.query(`SELECT * FROM blackout_days WHERE blackout_days.property_id = "${req.query.property_id}"`, (error, results) => {
    if (error) throw error;
    else res.send(results);
  });
});

app.listen(port, () => console.log(`This app is listening on port ${port}!`));
