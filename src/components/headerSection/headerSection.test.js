import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import Header from './headerSection';

const SomeChild = () => (
  'Some child is here'
);
describe('Header Section component', () => {
  it('renders correctly', () => {
    const component = render(
      <Router>
        <Header>
          <SomeChild />
        </Header>
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
});
