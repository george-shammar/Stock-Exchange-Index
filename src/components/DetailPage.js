import React from 'react';
// import PropTypes from 'prop-types';
// import { detailStock } from '../api';
/* eslint-disable */
const DetailPage = () => {
  const detailStock = async () => {
      const response = await fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=e517e7bdf90a7bed784312f134d9eab9');
      const data = response.json();
      // const x =JSON.parse(data);
      return data;
    };
    const stock = detailStock();
    console.log(Object.keys(stock));

  return (
  <div>
    <h1>Stock Index Statistics</h1>
    {/* <h3>{stock.symbol}</h3>
      <h2>{stock.name}</h2>
      <h3>{stock.price}</h3>
      <h2>{stock.exchange}</h2>
      <h2>{stock.description}</h2> */}
  </div>
  )
};

// DetailPage.propTypes = {
//   onClickHandler: PropTypes.func.isRequired,
//   stock: PropTypes.instanceOf(Object).isRequired,
// };
export default DetailPage;
