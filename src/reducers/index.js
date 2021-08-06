import { createStore, combineReducers } from 'redux';
import allStocksReducer from './allStocksReducer';
import favoriteStocksReducer from './favoritStocksReducer';
import { searchTermReducer } from './filter';

const store = createStore(combineReducers({
  allStocks: allStocksReducer,
  favoriteStocks: favoriteStocksReducer,
  searchTerm: searchTermReducer,
}));

export default store;
