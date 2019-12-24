import React from 'react';
import { render } from 'enzyme';
import Logo from './logo';

describe('Logo Section component', () => {
  it('renders correctly', () => {
    const component = render(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
