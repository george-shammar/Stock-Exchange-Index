import React from 'react';
import AllStocks from '../containers/AllStocks';
import FavoriteStocks from '../containers/FavoriteStocks';
import SearchTerm from '../containers/Search';

const App = () => (
  <div>
    <SearchTerm />
    <h2>Favorite Stocks</h2>
    <FavoriteStocks />
    <hr />
    <h2>All Stock Index</h2>
    <AllStocks />
  </div>
);

export default App;
