import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from './Calendar';
import Guests from './Guests';

Modal.setAppElement('#app');

const PriceTitle = styled.span`
  font-size: 1.5em;
  text-align: left;
  color: black;
  float: left;
`;

const PerNightTitle = styled.span`
  font-size: 0.75em;
  text-align: left;
  color: black;
  float: left;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  color: black;
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
  font-size: 0.4em;
  height: 10em;
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
      guests: 'Guests',
      calendarModalOpen: false,
      guestsModalOpen: false,
    };

    this.openCalendarModal = this.openCalendarModal.bind(this);
    this.closeCalendarModal = this.closeCalendarModal.bind(this);
    this.openGuestsModal = this.openGuestsModal.bind(this);
    this.closeGuestsModal = this.closeGuestsModal.bind(this);
  }

  openCalendarModal() {
    this.setState({
      calendarModalOpen: true,
    });
  }

  closeCalendarModal() {
    this.setState({
      calendarModalOpen: false,
    });
  }

  openGuestsModal() {
    this.setState({
      guestsModalOpen: true,
    });
  }

  closeGuestsModal() {
    this.setState({
      guestsModalOpen: false,
    });
  }

  render() {
    const { currentProperty, currentBookings, currentBlackOutDays } = this.props;
    const { startDate, endDate, guests, calendarModalOpen, guestsModalOpen } = this.state;
    return (
      <div>
        <PriceTitle id="pricePerNight">{`$${currentProperty.price_per_night}`}</PriceTitle>
        <PerNightTitle> per night</PerNightTitle>
        <br />
        <form id="dates-form">
          <Title>Dates</Title>
          <DateInput type="text" value={startDate} readOnly onClick={this.openCalendarModal} />
          <ArrowInput disabled="disabled" value="-->" readOnly />
          <DateInput type="text" value={endDate} readOnly onClick={this.openCalendarModal} />
          <Modal
            id="calender-modal"
            isOpen={calendarModalOpen}
            onRequestClose={this.closeCalendarModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
              content: {
                border: '1px solid black',
                padding: '15px',
                backgroundColor: 'white',
                width: '30%',
                height: '30%',
                // position: 'fixed',
                top: '30%',
                // left: '10%',
              },
            }}
          >
            <Calendar currentProperty={currentProperty} currentBookings={currentBookings} currentBlackOutDays={currentBlackOutDays} />
            <br />
            <button type="submit" onClick={this.closeCalendarModal}>Close</button>
          </Modal>
        </form>
        <form id="guests-form">
          <Title>Guests</Title>
          <GuestsInput type="text" value={guests} readOnly onClick={this.openGuestsModal} />
          <Modal
            id="guests-modal"
            isOpen={guestsModalOpen}
            onRequestClose={this.closeGuestsModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
              content: {
                border: '0.5px solid grey',
                padding: '15px',
                backgroundColor: 'purple',
                width: '30%',
                height: '30%',
                // position: 'fixed',
                top: '10%',
                left: '10%',
              },
            }}
          >
            <Guests />
            <button type="submit" onClick={this.closeGuestsModal}>Close</button>
          </Modal>
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
