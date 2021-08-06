import { createStore, combineReducers } from 'redux';
import allStocksReducer from './allStocksReducer';

const store = createStore(combineReducers({
    allStocks: allStocksReducer
}));

export default store;