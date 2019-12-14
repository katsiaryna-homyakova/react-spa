import React from 'react';
import { render } from 'enzyme';
import FilmCard from './filmCard';

describe('filmCard component', () => {
  it('renders correctly', () => {
    const component = render(
      <FilmCard imgPath="somePath" title="some title" releaseDate="some date" genre="some genre" />,
    );
    expect(component).toMatchSnapshot();
  });
});
