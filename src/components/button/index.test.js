import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';;


describe("button component", () => {
  it('renders correctly', () => {
    const component = shallow(<Button text="Some button" classes="some classes" handleClick="someEvent" />);
    expect(component).toMatchSnapshot();
  });
});