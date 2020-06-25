import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter.js';

describe('Counter', () => {
  it('should render correctly', () => {
    const component = shallow(<Counter counter={1} />);
    expect(component).toMatchSnapshot();
  });
});