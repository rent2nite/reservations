/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ReserveForm from '../client/src/ReserveForm';

describe('Unit Tests For ReserveForm Component', () => {
  let wrapper;
  const currentProperty = { price_per_night: '462.23' };
  const currentBookings = [];
  const currentBlackOutDays = [];
  beforeEach(() => {
    wrapper = shallow(<ReserveForm
      currentProperty={currentProperty}
      currentBookings={currentBookings}
      currentBlackOutDays={currentBlackOutDays}
    />);
  });
  test('should render the reserve form component on the screen', () => {
    expect(wrapper).toExist();
  });
  test('Should have a price per night title split into two parts', () => {
    expect(wrapper.find('.price-per-night')).toHaveLength(2);
  });
  test('Should have start date and end date input boxes', () => {
    expect(wrapper.find('.start-date')).toBeDefined();
    expect(wrapper.find('.end-date')).toBeDefined();
  });
});

describe('Unit Tests For ReserveForm Component Linking Properly To Calendar And Guest Modals And Components', () => {
  let wrapper;
  const currentProperty = { price_per_night: '462.23' };
  const currentBookings = [];
  const currentBlackOutDays = [];
  beforeEach(() => {
    wrapper = mount(<ReserveForm
      currentProperty={currentProperty}
      currentBookings={currentBookings}
      currentBlackOutDays={currentBlackOutDays}
    />);
  });
  test('Should contain a Calendar Modal', () => {
    expect(wrapper.find('calender-modal')).toBeDefined();
  });
  test('Should contain a Guests Modal', () => {
    expect(wrapper.find('guests-modal')).toBeDefined();
  });
  test('Should contain a Calendar Table', () => {
    expect(wrapper.find('calendar-table')).toBeDefined();
  });
  // test('Should contain a Guests xxx', () => {
  // });
});

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
