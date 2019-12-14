import React from 'react';
import { render } from 'enzyme';
import FilmDescription from './filmDescription';

describe('film description component', () => {
  it('renders correctly', () => {
    const component = render(

      <FilmDescription
        imgPath="somePath"
        title="some title"
        rating="some rating"
        releaseDate="some date"
        genre="some genre"
        duration="123"
        description="some description"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
