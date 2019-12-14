import React from 'react';
import { render } from 'enzyme';
import Title from './title';

describe('Title component', () => {
  it('renders correctly', () => {
    const component = render(<Title />);
    expect(component).toMatchSnapshot();
  });
});
