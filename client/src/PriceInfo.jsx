import React from 'react';
import PropTypes from 'prop-types';

const PriceInfo = (props) => {
  const { currentProperty, differenceBetweenStartAndEndDate, calculateTotalPrice } = props;
  return (
    <div>
      <div>
        <span>{`$${currentProperty.price_per_night} x ${differenceBetweenStartAndEndDate()}`}</span>
        <span>{`$${(currentProperty.price_per_night * differenceBetweenStartAndEndDate()).toFixed(2)}`}</span>
      </div>
      <div>
        <span>Cleaning Fee</span>
        <span>{`$${currentProperty.cleaning_fee}`}</span>
      </div>
      <div>
        <span>Service Fee</span>
        <span>$50</span>
      </div>
      <div>
        <span>Occupancy Taxes and Fees</span>
        <span>{`$${currentProperty.occupancy_tax_fee}`}</span>
      </div>
      <div>
        <span>Total</span>
        <span>{calculateTotalPrice()}</span>
      </div>
    </div>
  );
};

PriceInfo.propTypes = {
  currentProperty: PropTypes.shape({
    price_per_night: PropTypes.string,
    cleaning_fee: PropTypes.string,
    occupancy_tax_fee: PropTypes.string,
  }).isRequired,
  differenceBetweenStartAndEndDate: PropTypes.func.isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
};

export default PriceInfo;
