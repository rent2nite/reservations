/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

import ReserveForm from '../client/src/ReserveForm';

describe('Unit Tests For ReserveForm Component', () => {
  let wrapper;
  const currentProperty = {
    property_id: 1,
    property_name: '2577 Cruickshank Pine, Kuhicfurt, CO, 66491-6556',
    price_per_night: '462.23',
    max_occupants: '3',
    cleaning_fee: '16.01',
    occupancy_tax_fee: '18.21',
  };
  beforeEach(() => {
    wrapper = shallow(<ReserveForm currentProperty={currentProperty} />);
    // wrapper.setState({
    //   startDate: '',
    //   endDate: '',
    //   guests: '',
    // });
  });
  test('should render the reserve form component on the screen', () => {
    expect(wrapper).toExist();
  });
  test('Should have an element whose price per night matches what was passed down in props ', () => {
    expect(wrapper.find('#pricePerNight').text()).toBe(`$${currentProperty.price_per_night}`);
  });
});

// INITIAL FORM
// Should render a component with element pricePerNight --> DONE
// Price should match what it says in the db
// Should render a component with elements dates
// Should have startDate
// Should have endDate
// Onclick for startDate or endDate should make a calendar pop up
// Should render a component with element guests
// Should have a dropdown form of guest types (adults, children, infants)
// Form buttons should increment and decrement correctly
// Should not allow a user to add more guests than what is specified by max_occupants
// Should have a close button
// Should close when button is clicked, or user clicks outside of the form
// Should render a component with element reserve
// Onclick should send a POST req

// FINAL FORM
// Should display hypothetical price information when calendar is updated
// PricePerNight X NightsStayed
// CleaningFee
// ServiceFee
// OccupancyTaxesAndFees
// Total
// Should update calendar when form is submitted
