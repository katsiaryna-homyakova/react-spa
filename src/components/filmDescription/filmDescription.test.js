import React from 'react';
import { render } from 'enzyme';
import { FilmDescription } from './filmDescription';

describe('film description component', () => {
  it('renders correctly', () => {
    const component = render(

      <FilmDescription
        id={123}
        fetchData={() => { 'someString'; }}
        description="some description"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
