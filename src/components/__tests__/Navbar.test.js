import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../Navbar';

it('renders the FavoriteButton component correctly', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
