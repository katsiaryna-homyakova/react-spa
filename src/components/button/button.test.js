import React from 'react';
import { render } from 'enzyme';
import Button from './button';


describe('button component', () => {
  it('renders correctly', () => {
    const handleClick = () => { };
    const component = render(<Button text="Some button" classes="some classes" handleClick={handleClick} />);
    expect(component).toMatchSnapshot();
  });
});
