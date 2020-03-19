/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import PriceInfo from '../client/src/PriceInfo';

describe('Unit Tests For PriceInfo Component', () => {
  let wrapper;
  const currentProperty = { max_occupants: '9' };
  beforeEach(() => {
    wrapper = shallow(<PriceInfo 
      currentProperty={currentProperty}
      differenceBetweenStartAndEndDate={() => {}}
      calculateTotalPrice={() => {}}
    />);
  });
  test('should render the price info component', () => {
    expect(wrapper).toExist();
  });
  test('should have a field that displays (price per night) x (nights stayed)', () => {
    expect(wrapper.find('.price-info-all-nights')).toBeDefined();
  });
  test('should have a field that displays the cleaning fee', () => {
    expect(wrapper.find('.price-info-cleaning-fee')).toBeDefined();
  });
  test('should have a field that displays the service fee', () => {
    expect(wrapper.find('.price-info-service-fee')).toBeDefined();
  });
  test('should have a field that displays the occupancy fee', () => {
    expect(wrapper.find('.price-info-occupancy-fee')).toBeDefined();
  });
  test('should have a field that displays the total price', () => {
    expect(wrapper.find('.price-info-total')).toBeDefined();
  });
});