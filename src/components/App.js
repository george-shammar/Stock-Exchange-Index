import React from 'react';
import AllStocks from '../containers/AllStocks';
import FavoriteStocks from '../containers/FavoriteStocks';

const App = () => {
  return (
    <div>
      <h2>Favorite Stocks</h2>
      <FavoriteStocks />
      <hr />
      <h2>All Stock Index</h2>
      <AllStocks />
    </div>
  );
};

export default App;
