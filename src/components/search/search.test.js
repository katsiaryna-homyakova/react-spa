import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Search from './search';

describe('Search component', () => {
  it('renders correctly', () => {
    const component = render(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('handle input change', () => {
    const component = shallow(<Search />);
    component.find('input').simulate('change', { target: { value: 'foo' } });
    expect(component.state('value')).toEqual('foo');
  });

  it('handle filter change', () => {
    const component = mount(<Search />);
    component
      .find('.filter button')
      .at(1)
      .simulate('click');
    expect(component.state('activeFilter')).toEqual('genre');
  });
});
