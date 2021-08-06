import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */

const Stock = ({ stock, children }) => (
  <div key={stock.id} tabIndex={0}>
    <span>
      <h3>{stock.name}</h3>
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
