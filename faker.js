const faker = require('faker');

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

export default properties;
