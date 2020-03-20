import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';

const {
  PriceInfoWrapper,
  PriceInfoRow,
  PriceInfoLabel,
  PriceInfoValue,
} = Styles;

const PriceInfo = (props) => {
  const { currentProperty, differenceBetweenStartAndEndDate, calculateTotalPrice } = props;
  return (
    <PriceInfoWrapper>
      <PriceInfoRow>
      <PriceInfoLabel className="price-info-all-nights">{`$${currentProperty.price_per_night} x ${differenceBetweenStartAndEndDate()}`}</PriceInfoLabel>
      <PriceInfoValue className="price-info-all-nights">{`$${(currentProperty.price_per_night * differenceBetweenStartAndEndDate()).toFixed(2)}`}</PriceInfoValue>
      </PriceInfoRow>
      <PriceInfoRow>
      <PriceInfoLabel className="price-info-cleaning-fee">Cleaning Fee</PriceInfoLabel>
      <PriceInfoValue className="price-info-cleaning-fee">{`$${currentProperty.cleaning_fee}`}</PriceInfoValue>

      </PriceInfoRow>
      <PriceInfoRow>
      <PriceInfoLabel className="price-info-service-fee">Service Fee</PriceInfoLabel>
      <PriceInfoValue className="price-info-service-fee">$50</PriceInfoValue>

      </PriceInfoRow>
      <PriceInfoRow>
      <PriceInfoLabel className="price-info-occupancy-fee">Occupancy Taxes and Fees</PriceInfoLabel>
      <PriceInfoValue className="price-info-occupancy-fee">{`$${currentProperty.occupancy_tax_fee}`}</PriceInfoValue>

      </PriceInfoRow>
      <PriceInfoRow>

      <PriceInfoLabel primary className="price-info-total">Total</PriceInfoLabel>
      <PriceInfoValue primary className="price-info-total">{calculateTotalPrice()}</PriceInfoValue>
      </PriceInfoRow>
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
