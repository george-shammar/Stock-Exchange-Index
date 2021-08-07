import React from 'react';
import AllStocks from '../containers/AllStocks';
import FavoriteStocks from '../containers/FavoriteStocks';
import SearchTerm from '../containers/Search';
import '../Index.css';

const App = () => (
  <div className="app">
    <SearchTerm />
    <h2>Watchlisted Stocks</h2>
    <FavoriteStocks />
    <hr />
    <h2>All Stock Index</h2>
    <AllStocks />
  </div>
);

export default App;
