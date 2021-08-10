import React from 'react';
import PropTypes from 'prop-types';

/*eslint-disable */

const DetailPage = ({ onClickHandler }) => (
  <div role="link" onClick={onClickHandler} >
    <h1>Stock Index Statistics</h1>
  </div>
);

DetailPage.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
export default DetailPage;
