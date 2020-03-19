import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';

const {
  PriceInfoWrapper,
  PriceInfoLabels,
  PriceInfoValues,
  PriceInfoLabel,
  PriceInfoValue,
} = Styles;

const PriceInfo = (props) => {
  const { currentProperty, differenceBetweenStartAndEndDate, calculateTotalPrice } = props;
  return (
    <PriceInfoWrapper>
      <PriceInfoLabels>
        <PriceInfoLabel className="price-info-all-nights">{`$${currentProperty.price_per_night} x ${differenceBetweenStartAndEndDate()}`}</PriceInfoLabel>
        <PriceInfoLabel className="price-info-cleaning-fee">Cleaning Fee</PriceInfoLabel>
        <PriceInfoLabel className="price-info-service-fee">Service Fee</PriceInfoLabel>
        <PriceInfoLabel className="price-info-occupancy-fee">Occupancy Taxes and Fees</PriceInfoLabel>
        <PriceInfoLabel primary className="price-info-total">Total</PriceInfoLabel>
      </PriceInfoLabels>
      <PriceInfoValues>
        <PriceInfoValue className="price-info-all-nights">{`$${(currentProperty.price_per_night * differenceBetweenStartAndEndDate()).toFixed(2)}`}</PriceInfoValue>
        <PriceInfoValue className="price-info-cleaning-fee">{`$${currentProperty.cleaning_fee}`}</PriceInfoValue>
        <PriceInfoValue className="price-info-service-fee">$50</PriceInfoValue>
        <PriceInfoValue className="price-info-occupancy-fee">{`$${currentProperty.occupancy_tax_fee}`}</PriceInfoValue>
        <PriceInfoValue primary className="price-info-total">{calculateTotalPrice()}</PriceInfoValue>
      </PriceInfoValues>
    </PriceInfoWrapper>
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
