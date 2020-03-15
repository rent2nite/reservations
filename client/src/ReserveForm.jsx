import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const DateInput = styled.input`
  font-size: 0.4em;
  height: 10em;
  width: 40%;
`;

const ArrowInput = styled.input`
  /* Adapt the colors based on primary prop */
  // background: ${(props) => props.primary ? "palevioletred" : "white"};
  // color: ${(props) => props.primary ? "white" : "palevioletred"};
  font-size: 0.8em;
  height: 5em;
  width: 10%;
`;

const GuestsInput = styled.input`
  font-size: 1.8em;
  width: 90%;
`;

const ReserveButton = styled.button`
  background: red;
  font-size: 1.5em;
  width: 90%;
  height: 3em;
  border-radius: 1em;
`;

class ReserveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Check In',
      endDate: 'Check Out',
      guests: '',
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(event) {
    const { startDate } = this.state;
    this.setState({ startDate: event.target.value }, () => console.log(startDate));
  }

  handleEndDateChange(event) {
    const { endDate } = this.state;
    this.setState({ endDate: event.target.value }, () => console.log(endDate));
  }

  render() {
    const { currentProperty } = this.props;
    const { startDate, endDate, guests } = this.state;
    return (
      <div>
        <div>
          <Title>
            <span id="pricePerNight">{`$${currentProperty.price_per_night}`}</span>
            <span> per night</span>
          </Title>
        </div>
        <form id="dates-form">
          <Title>Dates</Title>
          <DateInput type="text" value={startDate} readOnly onClick={() => console.log('Clicked StartDate')} />
          <ArrowInput disabled="disabled" value="-->" readOnly />
          <DateInput type="text" value={endDate} readOnly onClick={() => console.log('Clicked EndDate')} />
        </form>
        <form id="guests-form">
          <Title>Guests</Title>
          <GuestsInput type="text" value={guests} readOnly onClick={() => console.log('Clicked Guests')} />
        </form>
        <br />
        <ReserveButton type="submit">Reserve</ReserveButton>
      </div>
    );
  }
}

ReserveForm.propTypes = {
  currentProperty: PropTypes.shape({
    property_id: PropTypes.number,
    property_name: PropTypes.string,
    price_per_night: PropTypes.string,
    max_occupants: PropTypes.string,
    cleaning_fee: PropTypes.string,
    occupancy_fee: PropTypes.string,
  }).isRequired,
};

export default ReserveForm;
