import React from 'react';
import PropTypes from 'prop-types';

class ReserveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
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
          <div>
            <span id="pricePerNight">{`$${currentProperty.price_per_night}`}</span>
            <span> per night</span>
          </div>
        </div>
        <br />
        <form id="dates-form">
          Dates
          <br />
          <input type="text" value={startDate} readOnly onClick={() => console.log('Clicked StartDate')} />
          <input type="text" value={endDate} readOnly onClick={() => console.log('Clicked EndDate')} />
        </form>
        <br />
        <form id="guests-form">
          Guests
          <br />
          <input type="text" value={guests} readOnly onClick={() => console.log('Clicked Guests')} />
        </form>
        <br />
        <button type="submit">Reserve</button>
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
