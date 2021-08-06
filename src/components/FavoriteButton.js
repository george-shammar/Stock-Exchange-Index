import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = ({ children, onClickHandler, icon }) => (
  <button type="button" onClick={onClickHandler}>
    <img className="heart-icon" alt="" src={icon} />
    {children}
  </button>
);

FavoriteButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FavoriteButton;
