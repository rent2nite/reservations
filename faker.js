const faker = require('faker');

const serviceFee = 30;

const properties = [];
for (let i = 0; i < 100; i += 1) {
  properties.push({
    property_id: faker.random.uuid(),
    property_name: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`,
    price_per_night: `$${(100 + Math.random() * 400).toFixed(2)}`,
    max_occupants: Math.floor(2 + Math.random() * 10).toFixed(0),
    cleaning_fee: `$${(5 + Math.random() * 50).toFixed(2)}`,
    occupancy_tax_fee: `$${(5 + Math.random() * 25).toFixed(2)}`,
  });
}

const bookings = [];
for (let i = 0; i < properties.length; i += 1) {
  for (let j = 0; j < 12; j += 1) {
    const adults = Math.ceil(Math.random() * properties[i].max_occupants);
    const children = Math.floor(Math.random() * (properties[i].max_occupants - adults));
    const infants = Math.floor(Math.random() * (properties[i].max_occupants - adults - children));
    const startDate = `${JSON.stringify(faker.date.between(`2020-0${j + 1}-04`, `2020-0${j + 1}-09`)).slice(0, 11)}"`;
    const endDate = `${JSON.stringify(faker.date.between(`2020-0${j + 1}-10`, `2020-0${j + 1}-21`)).slice(0, 11)}"`;
    const nightsStayed = Number(endDate.slice(9, 11)) - Number(startDate.slice(9, 11));
    const nightsTimesPricePerNight = Number(properties[i].price_per_night.slice(1)) * nightsStayed;
    const cleanFee = Number(properties[i].cleaning_fee.slice(1));
    const occupancyFee = Number(properties[i].occupancy_tax_fee.slice(1));
    const booking = {
      booking_id: faker.random.uuid(),
      property_id: properties[i].property_id,
      start_date: startDate,
      end_date: endDate,
      adults,
      children,
      infants,
      total_price: (nightsTimesPricePerNight + cleanFee + occupancyFee + serviceFee).toFixed(2),
    };
    bookings.push(booking);
  }
}

const blackoutDays = [];
for (let i = 0; i < properties.length; i += 1) {
  for (let j = 0; j < 12; j += 1) {
    blackoutDays.push({
      property_id: properties[i].property_id,
      day_blacked_out: `${JSON.stringify(faker.date.between(`2020-0${j + 1}-01`, `2020-0${j + 1}-01`)).slice(0, 11)}"`,
    });

    blackoutDays.push({
      property_id: properties[i].property_id,
      day_blacked_out: `${JSON.stringify(faker.date.between(`2020-0${j + 1}-22`, `2020-0${j + 1}-27`)).slice(0, 11)}"`,
    });
  }
}

module.exports = {
  properties,
  bookings,
  blackoutDays,
};
