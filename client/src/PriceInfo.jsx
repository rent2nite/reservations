import React from 'react';
import PropTypes from 'prop-types';

const PriceInfo = (props) => {
  const { currentProperty, differenceBetweenStartAndEndDate, calculateTotalPrice } = props;
  return (
    <div>
      <div className="price-info-all-nights">
        <span>{`$${currentProperty.price_per_night} x ${differenceBetweenStartAndEndDate()}`}</span>
        <span>{`$${(currentProperty.price_per_night * differenceBetweenStartAndEndDate()).toFixed(2)}`}</span>
      </div>
      <div className="price-info-cleaning-fee">
        <span>Cleaning Fee</span>
        <span>{`$${currentProperty.cleaning_fee}`}</span>
      </div>
      <div className="price-info-service-fee">
        <span>Service Fee</span>
        <span>$50</span>
      </div>
      <div className="price-info-occupancy-fee">
        <span>Occupancy Taxes and Fees</span>
        <span>{`$${currentProperty.occupancy_tax_fee}`}</span>
      </div>
      <div className="price-info-total">
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
