import React from 'react';
import { render } from 'enzyme';
import Button from './button';


describe('button component', () => {
  it('renders correctly', () => {
    const component = render(<Button text="Some button" classes="some classes" handleClick="someEvent" />);
    expect(component).toMatchSnapshot();
  });
});
