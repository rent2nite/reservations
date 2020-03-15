import React from 'react';
import styled from 'styled-components';
import { ajax } from 'jquery';
import ReserveFrom from './ReserveForm';


const Wrapper = styled.section`
  text-align: center;
  border: 0.5px solid grey;
  padding: 15px;
  width: 30%;
  float: right;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProperty: {},
    };
  }

  componentDidMount() {
    // all 3 initial gets should be refactored to just one ajax call
    ajax({
      method: 'GET',
      data: { property_id: 19 },
      url: '/api/reservations/properties',
      success: (data) => {
        this.setState({
          currentProperty: data[0],
        }, () => console.log(this.state.currentProperty));
      },
      error: (err) => {
        console.log(err);
      },
    });
    ajax({
      method: 'GET',
      data: { property_id: 19 },
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
      data: { property_id: 19 },
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
      <Wrapper>
        <ReserveFrom currentProperty={currentProperty} />
      </Wrapper>
    );
  }
}

export default App;
