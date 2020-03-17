/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '../client/src/Calendar';

describe('Unit Tests For Calendar Component', () => {
  let wrapper;
  const currentProperty = { price_per_night: '462.23' };
  const currentBookings = [];
  const currentBlackOutDays = [];
  beforeEach(() => {
    wrapper = shallow(<Calendar
      currentProperty={currentProperty}
      currentBookings={currentBookings}
      currentBlackOutDays={currentBlackOutDays}
      populateStartDateField={() => {}}
      populateEndDateField={() => {}}
      startDate="startDate"
      endDate="endDate"
    />);
  });
  test('should render the calendar form component', () => {
    expect(wrapper).toExist();
  });
  test('should have a table header displaying a month', () => {
    expect(wrapper.find('.calendar-month-header')).toBeDefined();
  });
  test('should have a table displaying the weekdays', () => {
    expect(wrapper.find('.weekdays')).toBeDefined();
  });
  test('should have a table displaying the days in the month', () => {
    expect(wrapper.find('.weekly-data')).toBeDefined();
  });
  test('should have two buttons to change the month', () => {
    expect(wrapper.find('.calendar-month-prev')).toBeDefined();
    expect(wrapper.find('.calendar-month-next')).toBeDefined();
  });
});
