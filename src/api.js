const key = 'e517e7bdf90a7bed784312f134d9eab9';
const allStocksData = async () => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`);
  return response.json();
};

// const allStocksData = [
//   apiData(),
//   // { symbol: 0, name: 'Biscuits' },
//   // { symbol: 1, name: 'Bulgogi' },
//   // { symbol: 2, name: 'Calamarig' },
//   // { symbol: 3, name: 'Ceviche' },
//   // { symbol: 4, name: 'Cheeseburger' },
//   // { symbol: 5, name: 'Churrasco' },
//   // { symbol: 6, name: 'Dumplings' },
//   // { symbol: 7, name: 'Fish & Chips' },
//   // { symbol: 8, name: 'Hummus' },
//   // { symbol: 9, name: 'Masala Dosa' },
//   // { symbol: 10, name: 'Pad Thai' },
// ];

export default allStocksData;
