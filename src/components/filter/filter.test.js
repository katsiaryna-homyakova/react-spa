import React from 'react';
import { mount } from 'enzyme';
import Filter from './filter';

describe('filter component', () => {
  const mockClick = jest.fn(); let
    component;

  beforeAll(() => {
    const filters = [
      { id: 'releaseDate', value: 'Release date' },
      { id: 'genre', value: 'Genre' },
    ];
    component = mount(
      <Filter
        title="Sort by"
        filters={filters}
        handleChangeFilter={mockClick}
        activeFilter="someFilter"
      />,
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('handle click', () => {
    component
      .find('button')
      .at(1)
      .simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot();
  });
});
