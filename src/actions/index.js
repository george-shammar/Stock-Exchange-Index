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

export default { loadData, addStock, removeStock };
