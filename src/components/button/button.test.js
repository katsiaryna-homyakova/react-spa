import React from 'react';
import Button from './button';
import { render } from 'enzyme';;


describe("button component", () => {
  it('renders correctly', () => {
    const component = render(<Button text="Some button" classes="some classes" handleClick="someEvent" />);
    expect(component).toMatchSnapshot();
  });
});