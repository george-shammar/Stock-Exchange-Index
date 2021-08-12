import allStocksReducer from '../allStocksReducer';
import { loadData, addStock, removeStock, selectAllStocks,
    selectFavoriteStocks, selectFilteredFavoriteStocks,
    clearSearchTerm, setSearchTerm, selectFilteredAllStocks } from '../../actions/index';

test('should return the initial state', () => {  
    expect(allStocksReducer(undefined, {})).toEqual([]);
})