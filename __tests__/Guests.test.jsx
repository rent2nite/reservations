/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Guests from '../client/src/Guests';

describe('Unit Tests For Guests Component', () => {
  let wrapper;
  const currentProperty = { max_occupants: '9' };
  beforeEach(() => {
    wrapper = shallow(<Guests currentProperty={currentProperty} />);
  });
  test('should render the guests form component', () => {
    expect(wrapper).toExist();
  });
  test('should have Adults, Children, and Infants labels', () => {
    expect(wrapper.find('.adults-label')).toBeDefined();
    expect(wrapper.find('.children-label')).toBeDefined();
    expect(wrapper.find('.infants-label')).toBeDefined();
  });
  test('Adults, Children, and Infants labels should have increment and decrement buttons', () => {
    expect(wrapper.find('.adults-decrement')).toBeDefined();
    expect(wrapper.find('.children-decrement')).toBeDefined();
    expect(wrapper.find('.infants-decrement')).toBeDefined();
    expect(wrapper.find('.adults-increment')).toBeDefined();
    expect(wrapper.find('.children-increment')).toBeDefined();
    expect(wrapper.find('.infants-increment')).toBeDefined();
  });
});
