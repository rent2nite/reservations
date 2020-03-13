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
