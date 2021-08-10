import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import NavBar from '../components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
