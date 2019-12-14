import React from 'react';
import { render } from 'enzyme';
import Header from './headerSection';

describe('Header Section component', () => {
  it('renders correctly', () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
