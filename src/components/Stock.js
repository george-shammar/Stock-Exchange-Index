import React from 'react';

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

export default Stock;
