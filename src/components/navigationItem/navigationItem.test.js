import React from 'react';
import { render } from 'enzyme';
import NavigationItem from './navigationItem';

describe('NavigationItem component', () => {
  it('renders correctly', () => {
    const component = render(<NavigationItem />);
    expect(component).toMatchSnapshot();
  });
});
