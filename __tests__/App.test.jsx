/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';

describe('Unit Tests For App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('should render the app component on the screen', () => {
    expect(wrapper).toExist();
  });
  test('write more tests like this ', () => {
  });
});

// INITIAL FORM
// Should render a component with element pricePerNight
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
