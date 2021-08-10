// const key = 'e517e7bdf90a7bed784312f134d9eab9';
// const allStocksData = async () => {
//   const response = await fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`);
//   return response.json();
// };

const allStocksData = [
  {
    symbol: 'SYM', name: 'Biscuits', price: '4.5', exchange: 'NYSE',
  },
  {
    symbol: 'APP', name: 'Bulgogi', price: '4.0', exchange: 'NYSE',
  },
  {
    symbol: 'ERT', name: 'Calamarig', price: '6.34', exchange: 'NYSE',
  },
  {
    symbol: 'FHRD', name: 'Ceviche', price: '9.1', exchange: 'NYSE',
  },
  {
    symbol: 'HET', name: 'Cheeseburger', price: '2.2', exchange: 'NYSE',
  },
  {
    symbol: 'QWER', name: 'Churrasco', price: '3.22', exchange: 'NYSE',
  },
  {
    symbol: 'LKO', name: 'Dumplings', price: '19.2', exchange: 'NYSE',
  },
  {
    symbol: 'GGR', name: 'Fish & Chips', price: '32.0', exchange: 'NYSE',
  },
  {
    symbol: 'GJH', name: 'Hummus', price: '14.3', exchange: 'NYSE',
  },
  {
    symbol: 'QWT', name: 'Masala Dosa', price: '2.0', exchange: 'NYSE',
  },
  {
    symbol: 'MKL', name: 'Pad Thai', price: '65', exchange: 'NYSE',
  },
];

export default allStocksData;
