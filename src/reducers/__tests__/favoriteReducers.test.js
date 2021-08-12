import favoriteStocksReducer from '../favoritStocksReducer';
import { loadData, addStock, removeStock, selectAllStocks,
    selectFavoriteStocks, selectFilteredFavoriteStocks,
    clearSearchTerm, setSearchTerm, selectFilteredAllStocks } from '../../actions/index';

    test('should handle a stock being added to an empty favorite list', () => { 
        const stock = { symbol: 'SYM', name: 'Biscuits', price: '4.5', exchange: 'NYSE',}
        const previousState = []  
        expect(favoriteStocksReducer(previousState, addStock(stock))).toEqual([{ symbol: 'SYM', name: 'Biscuits', price: '4.5', exchange: 'NYSE',}
    ])})