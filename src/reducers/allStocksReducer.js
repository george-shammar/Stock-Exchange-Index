const initialState = [];
const allStocksReducer = (allStocks = initialState, action) => {
    switch (action.type) {
      case 'allStocks/loadData':
        return action.payload;
      case 'favoriteStocks/addStock':
        return allStocks.filter(stock => stock.id !== action.payload.id);
      case 'favoriteStocks/removeStock':
        return [...allStocks, action.payload]
      default:
        return allStocks;
    }
  }