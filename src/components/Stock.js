import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import DetailPage from './DetailPage';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Index.css';

const Stock = ({ stock, children }) => (
  <div key={stock.symbol} className="stock">
    <span className="stock-container">
      <h3 className="stock-name">{stock.symbol}</h3>
      <h4 className="stock-others">{stock.name}</h4>
      <h6 className="stock-price">{stock.price}</h6>
      <h5 className="stock-others">{stock.exchange}</h5>
      <Link to="/DetailPage">View Details</Link>
      <div className="image-container" />
    </span>
    {children}
  </div>
);
Stock.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
