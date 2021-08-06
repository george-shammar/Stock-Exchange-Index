const key = 'e517e7bdf90a7bed784312f134d9eab9';

const allStocksData = (
  fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`)
    .then((response) => (response.json()))
    .then((response) => response)
);

export default allStocksData;
