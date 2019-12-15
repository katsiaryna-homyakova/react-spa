import React from 'react';
import { render } from 'enzyme';
import Header from './headerSection';

const SomeChild = () => (
  'Some child is here'
);
describe('Header Section component', () => {
  it('renders correctly', () => {
    const component = render(
      <Header>
        <SomeChild />
      </Header>,
    );
    expect(component).toMatchSnapshot();
  });
});
