import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import NavigationItem from './navigationItem';

describe('NavigationItem component', () => {
  it('renders correctly', () => {
    const component = render(<Router><NavigationItem /></Router>);
    expect(component).toMatchSnapshot();
  });
});
