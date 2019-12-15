import React from 'react';
import { mount } from 'enzyme';
import { ResultsContainer } from './resultContainer';
import FilmCard from '../filmCard/filmCard';
import Filter from '../filter/filter';

describe('ResultContainer component', () => {
  const fetchData = () => { };
  const updateSorting = () => { };
  const sortResultsBy = 'sortProp';
  const resultsData = [
    {
      id: '1',
      imgPath: 'src/images/header.jpg',
      title: 'First title',
      genre: 'Animation',
      releaseDate: '1998',
    },
    {
      id: '2',
      imgPath: 'src/images/header.jpg',
      title: 'Second title',
      genre: 'Comedy',
      releaseDate: '1992',
    }];

  it('renders correctly', () => {
    const wrapper = mount(<ResultsContainer
      fetchData={fetchData}
      updateSorting={updateSorting}
      sortResultsBy={sortResultsBy}
      resultsData={resultsData}
    />);
    expect(wrapper.find(FilmCard).length).toEqual(2);
    expect(wrapper.find(Filter).length).toEqual(1);
  });
});
