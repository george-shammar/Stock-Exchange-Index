import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
// import Navbar from '../components/Navbar';
import DetailPage from '../components/DetailPage';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/detailPage" component={DetailPage} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
