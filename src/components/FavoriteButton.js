import React from 'react';
import PropTypes from 'prop-types';
import '../Index.css';

const FavoriteButton = ({ children, onClickHandler }) => (
  <button className="favorite-button" type="button" onClick={onClickHandler}>
    {/* <img className="heart-icon" alt="" src={icon} /> */}
    {children}
  </button>
);

FavoriteButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  // icon: PropTypes.string.isRequired,
};

export default FavoriteButton;
