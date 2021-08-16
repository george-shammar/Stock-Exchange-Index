// import React from 'react';
// import NavBar from '../components/Navbar';

import React from 'react';
import ReactDom from 'react-dom';
import NavBar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders NavBar without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});

it('renders the AllStocks component correctly', () => {
  const tree = renderer.create(<BrowserRouter>
    <NavBar />
  </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});