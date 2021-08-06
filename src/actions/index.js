import allStocksData from '../api';

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

const selectFavoriteStocks = (state) => state.favoriteStocks;

const selectFilteredFavoriteStocks = (state) => {
  const favoriteStocks = selectFavoriteStocks(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteStocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export { loadData, addStock, removeStock, selectFavoriteStocks, selectFilteredFavoriteStocks };
