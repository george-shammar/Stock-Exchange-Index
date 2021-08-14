import "regenerator-runtime/runtime.js";

const key = 'e517e7bdf90a7bed784312f134d9eab9';

const allStocksData = async () => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`);
  return response.json();
};

export default allStocksData;
