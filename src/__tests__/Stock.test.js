import React from 'react';
import ReactDom from 'react-dom';
import Stock from '../components/Stock';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

const stock = {
    symbol: "Sym",
    price: "13.0",
    exchange: "NASDAQ",
    name: "Apple",
}

it('renders Stock without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Stock stock={stock} key={stock.symbol}/>
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});

it('renders the Stock component correctly', () => {
  const tree = renderer.create(<BrowserRouter>
    <Stock stock={stock} key={stock.symbol}/>
  </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});