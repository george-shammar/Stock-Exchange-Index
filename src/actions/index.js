import allStocksData from "../api";


export const loadData = () => {
    return {
      type: 'allStocks/loadData',
      payload: allStocksData
    }
  }