import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './search';
import Title from '../title/title';
import Filter from '../filter/filter';
import Button from '../button/button';

const handleChangeText = jest.fn();
const submitSearch = jest.fn();
const fetchData = jest.fn();
const handleChangeFilter = jest.fn();
let component;

describe('Search component', () => {
  beforeEach(() => {
    component = shallow(<Search
      handleChangeText={handleChangeText}
      submitSearch={submitSearch}
      fetchData={fetchData}
      handleChangeFilter={handleChangeFilter}
      activeFilter="title"
    />);
  });

  it('renders correctly', () => {
    expect(component.find(Filter).length).toEqual(1);
    expect(component.find(Title).length).toEqual(1);
    expect(component.find(Button).length).toEqual(1);
  });

  it('handle input change', () => {
    component.find('input').simulate('change', { target: { value: 'foo' } });
    expect(handleChangeText).toBeCalled();
  });
});
