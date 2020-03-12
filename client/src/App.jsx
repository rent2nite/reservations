import React from 'react';
import { properties, bookings } from '../../faker';

const App = () => (
  <div>
    <h1>Hello Everybody!</h1>
    <div>BOOKING AT 0</div>
    <div>{bookings[0].booking_id}</div>
    <div>{bookings[0].property_id}</div>
    <div>{bookings[0].start_date}</div>
    <div>{bookings[0].end_date}</div>
    <div>{bookings[0].adults}</div>
    <div>{bookings[0].children}</div>
    <div>{bookings[0].infants}</div>
    {properties.map((property) => {
      return (
        <div key={property.property_id}>
          <div>PROPERTIES</div>
          <div>{property.property_id}</div>
          <div>{property.property_name}</div>
          <div>{property.price_per_night}</div>
          <div>{property.max_occupants}</div>
          <div>{property.cleaning_fee}</div>
          <div>{property.occupancy_tax_fee}</div>
          <br />
        </div>
      );
    })}
  </div>
);

export default App;
