import React from 'react';
import { render, mount } from 'enzyme';
import ResultContainer from './resultContainer';

describe('ResultContainer component', () => {
  it('renders correctly', () => {
    const component = render(<ResultContainer />);
    expect(component).toMatchSnapshot();
  });

  it('handle Click correctly', () => {
    const component = mount(<ResultContainer />);
    component
      .find('button')
      .at(1)
      .simulate('click');
    expect(component.state('activeFilter')).toEqual('genre');
  });
});
