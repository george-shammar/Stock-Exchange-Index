import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import DetailPage from '../components/DetailPage';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Navbar />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detailPage" component={DetailPage} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
