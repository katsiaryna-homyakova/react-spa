import React from 'react';
import { render } from 'enzyme';
import Footer from './footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
