import allStocksData from '../api';
import { selectSearchTerm } from '../reducers/filter';

const loadData = () => ({
  type: 'allStocks/loadData',
  payload: allStocksData,
});

const addStock = (stock) => ({
  type: 'favoriteStocks/addStock',
  payload: stock,
});

const removeStock = (stock) => ({
  type: 'favoriteStocks/removeStock',
  payload: stock,
});

const setSearchTerm = (term) => ({
  type: 'searchTerm/setSearchTerm',
  payload: term,
});

const clearSearchTerm = () => ({
  type: 'searchTerm/clearSearchTerm',
});

const selectFavoriteStocks = (state) => state.favoriteStocks;

const selectFilteredFavoriteStocks = (state) => {
  const favoriteStocks = selectFavoriteStocks(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteStocks.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase())); /* eslint-disable-line max-len */
};

export {
  loadData, addStock, removeStock,
  selectFavoriteStocks, selectFilteredFavoriteStocks,
  clearSearchTerm, setSearchTerm,
};
