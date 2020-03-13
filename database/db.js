const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reservations',
});
connection.connect();

const serviceFee = 30;

const properties = [];
for (let i = 0; i < 100; i += 1) {
  const property = {
    property_name: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`,
    price_per_night: (100 + Math.random() * 400).toFixed(2),
    max_occupants: Math.floor(2 + Math.random() * 10).toFixed(0),
    cleaning_fee: (5 + Math.random() * 50).toFixed(2),
    occupancy_tax_fee: (5 + Math.random() * 25).toFixed(2),
  };
  properties.push(property);
  connection.query('INSERT INTO properties SET ?', property, (error) => {
    if (error) throw error;
  });
}

for (let i = 0; i < properties.length; i += 1) {
  for (let j = 0; j < 12; j += 1) {
    const adults = Math.ceil(Math.random() * properties[i].max_occupants);
    const children = Math.floor(Math.random() * (properties[i].max_occupants - adults));
    const infants = Math.floor(Math.random() * (properties[i].max_occupants - adults - children));
    const startDate = `${JSON.stringify(faker.date.between(`2020-0${j + 1}-04`, `2020-0${j + 1}-09`))}`;
    const endDate = `${JSON.stringify(faker.date.between(`2020-0${j + 1}-10`, `2020-0${j + 1}-21`))}`;
    const nightsStayed = Number(endDate.slice(9, 11)) - Number(startDate.slice(9, 11));
    const costOfNights = properties[i].price_per_night * nightsStayed;
    const cleanFee = properties[i].cleaning_fee;
    const occupancyFee = properties[i].occupancy_tax_fee;
    const booking = {
      booking_id: faker.random.uuid(),
      property_id: i + 1,
      starting_date: startDate,
      ending_date: endDate,
      adults,
      children,
      infants,
      total_price: (costOfNights + Number(cleanFee) + Number(occupancyFee) + serviceFee).toFixed(2),
    };
    connection.query('INSERT INTO bookings SET ?', booking, (error) => {
      if (error) throw error;
    });
  }
}

for (let i = 0; i < properties.length; i += 1) {
  for (let j = 0; j < 12; j += 1) {
    const blackoutDayOne = {
      blackout_id: faker.random.uuid(),
      property_id: i + 1,
      day_blacked_out: `${JSON.stringify(faker.date.between(`2020-0${j + 1}-01`, `2020-0${j + 1}-01`))}`,
    };
    connection.query('INSERT INTO blackout_days SET ?', blackoutDayOne, (error) => {
      if (error) throw error;
    });
    const blackoutDayTwo = {
      blackout_id: faker.random.uuid(),
      property_id: i + 1,
      day_blacked_out: `${JSON.stringify(faker.date.between(`2020-0${j + 1}-22`, `2020-0${j + 1}-27`))}`,
    };
    connection.query('INSERT INTO blackout_days SET ?', blackoutDayTwo, (error) => {
      if (error) throw error;
    });
  }
}

module.exports = {
  properties,
  connection,
};
