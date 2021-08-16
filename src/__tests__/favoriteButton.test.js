import React from 'react';
import renderer from 'react-test-renderer';
import ReactDom from 'react-dom';
import FavoriteButton from '../components/FavoriteButton';

it('renders the FavoriteButton component correctly', () => {
  const tree = renderer.create(<FavoriteButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the FavoriteButton component correctly with props', () => {
    const tree = renderer.create(<FavoriteButton onClickHandler={() => console.log("stock")}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders FavoriteButton without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <FavoriteButton />, 
  div);

  ReactDom.unmountComponentAtNode(div);
});