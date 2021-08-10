import allStocksData from '../api';
import { selectSearchTerm } from '../reducers/filter';

const loadData = () => ({
  type: 'allStocks/loadData',
  payload: allStocksData,
});

// const loadData = () => async (dispatch) => {
//   const payload = await allStocksData();
//   dispatch({ type: 'allStocks/loadData', payload });
// };

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

const selectAllStocks = (state) => state.allStocks;

const selectFilteredAllStocks = (state) => {
  const allStocks = selectAllStocks(state);
  const searchTerm = selectSearchTerm(state);

  return allStocks.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase())); /* eslint-disable-line max-len */
};

export {
  loadData, addStock, removeStock, selectAllStocks,
  selectFavoriteStocks, selectFilteredFavoriteStocks,
  clearSearchTerm, setSearchTerm, selectFilteredAllStocks,
};
