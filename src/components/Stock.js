import React from 'react';
import PropTypes from 'prop-types';
import '../Index.css';

const Stock = ({ stock, children }) => {
  <div key={stock.symbol} className="stock">
    <div className="stock-container">
      <h3 className="stock-name">{stock.symbol}</h3>
      <h4 className="stock-others">{stock.name}</h4>
      <h6 className="stock-price">{stock.price}</h6>
      <h5 className="stock-others">{stock.exchange}</h5>
      <p className="details">See details</p>
      <div className="image-container" />
    </div>
    {children}
  </div>;
};

Stock.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
