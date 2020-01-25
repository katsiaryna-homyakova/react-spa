import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import FilmCard from './filmCard';

describe('filmCard component', () => {
  it('renders correctly', () => {
    const component = render(
      <Router><FilmCard id={123} imgPath="somePath" title="some title" releaseDate="some date" genre="some genre" /></Router>,
    );
    expect(component).toMatchSnapshot();
  });
});
