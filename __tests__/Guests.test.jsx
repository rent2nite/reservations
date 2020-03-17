/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Guests from '../client/src/Guests';

describe('Unit Tests For ReserveForm Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Guests />);
  });
  test('should render the guests form component', () => {
    expect(wrapper).toExist();
  });
});

// Should have a dropdown form of guest types (adults, children, infants)
// Form buttons should increment and decrement correctly
// Should not allow a user to add more guests than what is specified by max_occupants
// Should have a close button
// Should close when button is clicked, or user clicks outside of the form
