const initialState = [];

const favoriteStocksReducer = (favoriteStocks = initialState, action) => {
  switch (action.type) {
    case 'favoriteStocks/addStock':
      return [...favoriteStocks, action.payload]
    case 'favoriteStocks/removeStock':
      return favoriteStocks.filter(stock => stock.id !== action.payload.id)
    default:
      return favoriteStocks;
  }
}

export default favoriteStocksReducer;