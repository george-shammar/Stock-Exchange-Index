import allStocksData from "../api";

const loadData = () => {
    return {
      type: 'allStocks/loadData',
      payload: allStocksData
    }
}

const addStock = (stock) => {
    return {
      type: 'favoriteStocks/addStock',
      payload: stock
    }
  }
  
const removeStock = (stock) => {
    return {
      type: 'favoriteStocks/removeStock',
      payload: stock
    }
}

export default { loadData, addStock, removeStock };