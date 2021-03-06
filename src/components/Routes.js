import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';
import NavBar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/DetailPage" component={DetailPage} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
