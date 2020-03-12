/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
