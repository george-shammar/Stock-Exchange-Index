import React from 'react';
import { useDispatch } from 'react-redux';
import AllStocks from '../containers/AllStocks';
import FavoriteStocks from '../containers/FavoriteStocks';
import SearchTerm from '../containers/Search';
import { setSearchTerm, clearSearchTerm } from '../actions/index';
import '../Index.css';

const App = () => {
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className="app">
      <SearchTerm onSearch={onSearchTermChangeHandler} onClear={onClearSearchTermHandler} />
      <h2>Watchlisted Stocks</h2>
      <FavoriteStocks />
      <hr />
      <h2>All Stock Index</h2>
      <AllStocks />
    </div>
  );
};

export default App;
