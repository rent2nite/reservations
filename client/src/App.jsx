import React from 'react';
import properties from '../../faker';

const App = () => (
  <div>
    <h1>Hello Everybody!</h1>
    {properties.map((property) => {
      return (
        <div key={property.property_id}>
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
