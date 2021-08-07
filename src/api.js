/* eslint-disable */
// const key = 'e517e7bdf90a7bed784312f134d9eab9';
// const apiData = async () => {
//  const response = await fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`)
//  console.log(response.json());
 
// }

// const allStocksData = apiData();

/* eslint-disable */
// let raw = {};
// const apiData = () => {
//   fetch(`https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`)
//     .then((response) => (response.json()))
//     .then((response) => {
//      return (response.map(stock => {
//         raw = { name: stock.name, symbol: stock.sym,  }
        
//       }))
//     })
//   };
// const allStocksData = apiData();
// console.log(allStocksData);
const allStocksData = [
  { id: 0, name: 'Biscuits', img: 'img/biscuits.jpg'},
  { id: 1, name: 'Bulgogi', img: 'img/bulgogi.jpg'},
  { id: 2, name: 'Calamari', img: 'img/calamari.jpg'},
  { id: 3, name: 'Ceviche', img: 'img/ceviche.jpg'},
  { id: 4, name: 'Cheeseburger', img: 'img/cheeseburger.jpg'},
  { id: 5, name: 'Churrasco', img: 'img/churrasco.jpg'},
  { id: 6, name: 'Dumplings', img: 'img/dumplings.jpg'},
  { id: 7, name: 'Fish & Chips', img: 'img/fishnchips.jpg'},
  { id: 8, name: 'Hummus', img: 'img/hummus.jpg'},
  { id: 9, name: 'Masala Dosa', img: 'img/masaladosa.jpg'},
  { id: 10, name: 'Pad Thai', img: 'img/padthai.jpg'},
];
export default allStocksData;
