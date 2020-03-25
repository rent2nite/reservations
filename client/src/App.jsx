import React from 'react';
import { ajax } from 'jquery';
import ReserveForm from './ReserveForm';
import Styles from './Styles';

const { AppWrapper } = Styles;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProperty: {},
      currentBookings: [],
      currentBlackOutDays: [],
    };
    this.randomNum = this.randomNum.bind(this);
    this.getPropertiesBookingsBlackOuts = this.getPropertiesBookingsBlackOuts.bind(this);
    this.postNewBooking = this.postNewBooking.bind(this);
  }

  randomNum() {
    return Math.floor(Math.random() * 101);
  }

  componentDidMount() {
    this.getPropertiesBookingsBlackOuts(this.randomNum());
  }


  getPropertiesBookingsBlackOuts(propertyId) {
    ajax({
      method: 'GET',
      data: { property_id: propertyId },
      url: '/api/reservations/properties',
      success: (data) => {
        this.setState({
          currentProperty: data[0],
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
    ajax({
      method: 'GET',
      data: { property_id: propertyId },
      url: '/api/reservations/bookings',
      success: (data) => {
        this.setState({
          currentBookings: data,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
    ajax({
      method: 'GET',
      data: { property_id: propertyId },
      url: '/api/reservations/blackout_days',
      success: (data) => {
        this.setState({
          currentBlackOutDays: data,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postNewBooking(booking) {
    ajax({
      method: 'POST',
      data: JSON.stringify(booking),
      contentType: 'application/json',
      url: '/api/reservations/bookings',
      success: (uuid) => {
        this.getPropertiesBookingsBlackOuts(booking.property_id);
        alert(`your booking id number is ${uuid}`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    const { currentProperty, currentBookings, currentBlackOutDays } = this.state;
    return (
      <AppWrapper>
        <ReserveForm
          currentBlackOutDays={currentBlackOutDays}
          currentBookings={currentBookings}
          currentProperty={currentProperty}
          postNewBooking={this.postNewBooking}
        />
      </AppWrapper>
    );
  }
}

export default App;
