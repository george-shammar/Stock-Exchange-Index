import React from 'react';
import PropTypes from 'prop-types';
import '../Index.css';

const FavoriteButton = ({ children, onClickHandler }) => (
  <button className="favorite-button" type="button" onClick={onClickHandler}>
    {children}
  </button>
);

FavoriteButton.propTypes = {
  children: PropTypes.string,
  onClickHandler: PropTypes.func,
};
FavoriteButton.defaultProps = { children: '', onClickHandler: undefined };

export default FavoriteButton;
