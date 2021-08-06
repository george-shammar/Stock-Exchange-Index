import allStocksData from "../api";


const loadData = () => {
    return {
      type: 'allStocks/loadData',
      payload: allStocksData
    }
}

export default { loadData };