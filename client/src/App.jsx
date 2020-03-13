import React from 'react';
import { ajax } from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    ajax({
      method: 'GET',
      data: { property_id: '014e6b78-1cc0-49c8-8f0b-0e670d7b044d' },
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
      data: { property_id: '014e6b78-1cc0-49c8-8f0b-0e670d7b044d' },
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
    return (
      <div>
        Howdy World
      </div>
    );
  }
}


export default App;
