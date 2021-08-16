import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteButton from '../components/FavoriteButton';

it('renders the FavoriteButton component correctly', () => {
  const tree = renderer.create(<FavoriteButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the FavoriteButton component correctly', () => {
    const tree = renderer.create(<FavoriteButton onClickHandler={() => console.log("stock")}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });