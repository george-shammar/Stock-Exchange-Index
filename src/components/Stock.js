import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailPage from './DetailPage';
import '../Index.css';

const Stock = ({ stock, children }) => {
  const goToDetails = () => (
    <div>
      <DetailPage symbol={stock.symbol} />
    </div>
  );

  return (
    <div key={stock.symbol} className="stock">
      <span className="stock-container">
        <h3 className="stock-name">{stock.symbol}</h3>
        <h4 className="stock-others">{stock.name}</h4>
        <h6 className="stock-price">{stock.price}</h6>
        <h5 className="stock-others">{stock.exchange}</h5>
        <Link to="/DetailPage" onClick={goToDetails} className="view mt-3"><p>View Details</p></Link>
      </span>
      {children}
    </div>
  );
};

Stock.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
