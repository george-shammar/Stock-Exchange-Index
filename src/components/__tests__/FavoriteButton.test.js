import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteButton from '../FavoriteButton';

it('renders the FavoriteButton component correctly', () => {
  const tree = renderer.create(<FavoriteButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
