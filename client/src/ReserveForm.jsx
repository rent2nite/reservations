import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from './Calendar';
import Guests from './Guests';

const Wrapper = styled.section`
  text-align: center;
`;

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

const ClearClose = styled.span`
  position: absolute;
  right: 1em;
  padding: 5px;
  color: purple;
  text-decoration: underline;
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
    this.populateStartDateField = this.populateStartDateField.bind(this);
    this.populateEndDateField = this.populateEndDateField.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  clearDates() {
    this.setState({
      startDate: 'Check In',
      endDate: 'Check Out',
    });
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

  populateStartDateField(d) {
    this.setState({
      startDate: d,
    });
  }

  populateEndDateField(d) {
    this.setState({
      endDate: d,
    });
  }


  render() {
    const { currentProperty, currentBookings, currentBlackOutDays } = this.props;
    const {
      startDate, endDate, guests, calendarModalOpen, guestsModalOpen,
    } = this.state;
    return (
      <Wrapper>
        <PriceTitle className="price-per-night">{`$${currentProperty.price_per_night} `}</PriceTitle>
        <PerNightTitle className="price-per-night">per night</PerNightTitle>
        <br />
        <form id="dates-form">
          <Title>Dates</Title>
          <DateInput className="start-date" type="text" value={startDate} readOnly onClick={this.openCalendarModal} />
          <ArrowInput disabled="disabled" value="-->" readOnly />
          <DateInput className="end-date" type="text" value={endDate} readOnly onClick={this.openCalendarModal} />
          <Modal
            className="calender-modal"
            ariaHideApp={false}
            isOpen={calendarModalOpen}
            onRequestClose={this.closeCalendarModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
              content: {
                background: 'white',
                width: '35%',
                height: '35%',
                position: 'fixed',
                top: '30%',
                left: '57.5%',
                padding: '15px',
              },
            }}
          >
            <Calendar
              currentProperty={currentProperty}
              currentBookings={currentBookings}
              currentBlackOutDays={currentBlackOutDays}
              populateStartDateField={this.populateStartDateField}
              populateEndDateField={this.populateEndDateField}
              startDate={startDate}
              endDate={endDate}
            />
            <br />
            <ClearClose type="submit" onClick={this.clearDates}>Clear Dates</ClearClose>
          </Modal>
        </form>
        <form id="guests-form">
          <Title>Guests</Title>
          <GuestsInput type="text" value={guests} readOnly onClick={this.openGuestsModal} />
          <Modal
            id="guests-modal"
            ariaHideApp={false}
            isOpen={guestsModalOpen}
            onRequestClose={this.closeGuestsModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
              content: {
                background: 'white',
                width: '35%',
                height: '35%',
                position: 'fixed',
                top: '45%',
                left: '57.5%',
                padding: '15px',
              },
            }}
          >
            <Guests currentProperty={currentProperty} />
            <div>{`${currentProperty.max_occupants} guests maximum. Infants don't count toward the number of guests.`}</div>
            <ClearClose type="submit" onClick={this.closeGuestsModal}>Close</ClearClose>
          </Modal>
        </form>
        <br />
        <ReserveButton type="submit">Reserve</ReserveButton>
      </Wrapper>
    );
  }
}

ReserveForm.propTypes = {
  currentProperty: PropTypes.shape({
    price_per_night: PropTypes.string,
    max_occupants: PropTypes.string,
  }).isRequired,
  currentBlackOutDays: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentBookings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ReserveForm;
