// import React from 'react';
// import renderer from 'react-test-renderer';
// import NavBar from '../components/Navbar';

// it('renders the AllStocks component correctly', () => {
//   const tree = renderer.create(<NavBar />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from 'react';
import ReactDom from 'react-dom';
import NavBar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

it('renders Header without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});