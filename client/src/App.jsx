import React from 'react';
import { ajax } from 'jquery';
import ReserveFrom from './ReserveForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProperty: {},
    };
  }

  componentDidMount() {
    const { currentProperty } = this.state;
    ajax({
      method: 'GET',
      data: { property_id: 1 },
      url: '/api/reservations/properties',
      success: (data) => {
        this.setState({
          currentProperty: data[0],
        }, () => console.log(currentProperty));
      },
      error: (err) => {
        console.log(err);
      },
    });
    ajax({
      method: 'GET',
      data: { property_id: 1 },
      url: '/api/reservations/bookings',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
    ajax({
      method: 'GET',
      data: { property_id: 1 },
      url: '/api/reservations/blackout_days',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    const { currentProperty } = this.state;
    return (
      <div>
        <ReserveFrom currentProperty={currentProperty} />
      </div>
    );
  }
}

export default App;
