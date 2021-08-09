import { combineReducers } from 'redux';
import allStocksReducer from './allStocksReducer';
import favoriteStocksReducer from './favoritStocksReducer';
import { searchTermReducer } from './filter';

const reducers = {
  allStocks: allStocksReducer,
  favoriteStocks: favoriteStocksReducer,
  searchTerm: searchTermReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
