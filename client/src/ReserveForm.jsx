import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from './Calendar';
import Guests from './Guests';
import PriceInfo from './PriceInfo';
import Styles from './Styles';
import stylesheet from './stylesheet.css';

const {
  ReserveFormWrapper,
  TopPriceItem,
  PriceTitle,
  PerNightTitle,
  MainArea,
  DatesForm,
  GuestsForm,
  Title,
  InputDiv,
  CalendarInputDiv,
  DateInput,
  ArrowInput,
  GuestsInput,
  // CalendarModalStyle,
  // GuestModalStyle,
  BottomReserveArea,
  ReserveButton,
  ClearClose,
  MaxGuests,
} = Styles;

class ReserveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Check In',
      endDate: 'Check Out',
      guests: { adults: 1, children: 0, infants: 0 },
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
    this.differenceBetweenStartAndEndDate = this.differenceBetweenStartAndEndDate.bind(this);
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    this.grabGuestInfo = this.grabGuestInfo.bind(this);
    this.makeReservation = this.makeReservation.bind(this);
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
    if (d !== 'Check Out') { setTimeout(this.closeCalendarModal, 500); }
  }

  clearDates() {
    this.setState({
      startDate: 'Check In',
      endDate: 'Check Out',
    });
  }

  differenceBetweenStartAndEndDate() {
    const { startDate, endDate } = this.state;
    const startMoment = [startDate.slice(0, 4), startDate.slice(5, 7) - 1, startDate.slice(8)];
    const endMoment = [endDate.slice(0, 4), endDate.slice(5, 7) - 1, endDate.slice(8)];
    return moment(endMoment).diff(startMoment, 'days');
  }

  calculateTotalPrice() {
    const { currentProperty } = this.props;
    const nightsPrice = currentProperty.price_per_night * this.differenceBetweenStartAndEndDate();
    const cleaning = currentProperty.cleaning_fee;
    const service = 50;
    const occupancy = currentProperty.occupancy_tax_fee;
    return `$${(Number(nightsPrice) + Number(cleaning) + service + Number(occupancy)).toFixed(2)}`;
  }

  grabGuestInfo(guests) {
    this.setState({
      guests,
    });
  }

  makeReservation() {
    const { postNewBooking, currentProperty } = this.props;
    const { startDate, endDate, guests } = this.state;
    if (endDate !== 'Check Out') {
      const totalPrice = this.calculateTotalPrice();
      const reservationInfo = {
        property_id: currentProperty.property_id,
        starting_date: startDate,
        ending_date: endDate,
        adults: guests.adults,
        children: guests.children,
        infants: guests.infants,
        total_price: totalPrice,
      };
      postNewBooking(reservationInfo);
      this.setState({
        startDate: 'Check In',
        endDate: 'Check Out',
        guests: { adults: 1, children: 0, infants: 0 },
      });
    }
  }

  render() {
    const { currentProperty, currentBookings, currentBlackOutDays } = this.props;
    const {
      startDate, endDate, guests, calendarModalOpen, guestsModalOpen,
    } = this.state;
    return (
      <ReserveFormWrapper>
        <TopPriceItem>
          <PriceTitle className="price-per-night">{`$${currentProperty.price_per_night}`}</PriceTitle>
          <PerNightTitle className="price-per-night">per night</PerNightTitle>
        </TopPriceItem>
        <MainArea>
          <DatesForm id="dates-form">
            <Title>Dates</Title>
            <CalendarInputDiv>
              <DateInput className="start-date" type="text" value={startDate} readOnly onClick={this.openCalendarModal} />
              <ArrowInput disabled="disabled" value="→" readOnly />
              <DateInput className="end-date" type="text" value={endDate} readOnly onClick={this.openCalendarModal} />
            </CalendarInputDiv>
            <Modal
              id="calendar-modal"
              ariaHideApp={false}
              isOpen={calendarModalOpen}
              onRequestClose={this.closeCalendarModal}
              // style={CalendarModalStyle}
              className={stylesheet.CalendarModal}
              overlayClassName={stylesheet.Overlay}
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
              <ClearClose type="submit" onClick={this.clearDates}>Clear Dates</ClearClose>
            </Modal>
          </DatesForm>
          <GuestsForm id="guests-form">
            <InputDiv>
              <Title>Guests</Title>
              <GuestsInput
                type="text"
                value={`${guests.adults} adults, ${guests.children} children, ${guests.infants} infants`}
                readOnly
                onClick={this.openGuestsModal}
              />
            </InputDiv>
            <Modal
              id="guests-modal"
              ariaHideApp={false}
              isOpen={guestsModalOpen}
              onRequestClose={this.closeGuestsModal}
              // style={GuestModalStyle}
              className={stylesheet.GuestModal}
              overlayClassName={stylesheet.Overlay}
            >
              <Guests currentProperty={currentProperty} grabGuestInfo={this.grabGuestInfo} />
              <MaxGuests>{`${currentProperty.max_occupants} guests maximum. Infants don't count toward the number of guests.`}</MaxGuests>
              <ClearClose type="submit" onClick={this.closeGuestsModal}>Close</ClearClose>
            </Modal>
          </GuestsForm>
          {endDate !== 'Check Out' ? (
            <PriceInfo
              currentProperty={currentProperty}
              differenceBetweenStartAndEndDate={this.differenceBetweenStartAndEndDate}
              calculateTotalPrice={this.calculateTotalPrice}
            />
          ) : null}
        </MainArea>
        <BottomReserveArea>
          <ReserveButton type="submit" onClick={() => this.makeReservation()}>Reserve</ReserveButton>
        </BottomReserveArea>
      </ReserveFormWrapper>
    );
  }
}

ReserveForm.propTypes = {
  currentProperty: PropTypes.shape({
    property_id: PropTypes.number,
    price_per_night: PropTypes.string,
    max_occupants: PropTypes.string,
    cleaning_fee: PropTypes.string,
    occupancy_tax_fee: PropTypes.string,
  }).isRequired,
  currentBlackOutDays: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentBookings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  postNewBooking: PropTypes.func.isRequired,
};

export default ReserveForm;
