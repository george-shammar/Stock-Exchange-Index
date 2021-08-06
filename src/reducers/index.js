import { createStore, combineReducers } from 'redux';
import allStocksReducer from './allStocksReducer';
import favoriteStocksReducer from './favoritStocksReducer';

const store = createStore(combineReducers({
    allStocks: allStocksReducer,
    favoriteStocks: favoriteStocksReducer
}));

export default store;