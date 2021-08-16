const initialState = [];
const allStocksReducer = (allStocks = initialState, action) => {
  switch (action.type) {
    case 'allStocks/loadData':
      return action.payload;
    case 'favoriteStocks/addStock':
      return allStocks.filter((stock) => stock.symbol !== action.payload.symbol);
    case 'favoriteStocks/removeStock':
      return [...allStocks, action.payload];
    default:
      return allStocks;
  }
};

export default allStocksReducer;
