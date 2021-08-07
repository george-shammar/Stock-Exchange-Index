import React from 'react';
import PropTypes from 'prop-types';
import '../Index.css';

const Stock = ({ stock, children }) => (
  <div key={stock.id} className="stock">
    {/* tabIndex={0} */}
    <span className="stock-container">
      <h3 className="stock-name">{stock.name}</h3>
      {/* <div className="image-container">
              <img src={recipe.img} alt="" className="recipe-image" />
            </div> */}
    </span>
    {children}
  </div>
);

Stock.propTypes = {
  children: PropTypes.string.isRequired,
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
