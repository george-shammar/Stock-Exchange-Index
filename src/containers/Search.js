import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSearchTerm } from '../reducers/filter';
import '../Index.css';

const searchIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/768px-Search_Icon.svg.png';
const clearIcon = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/clear-16-216586.png';

const SearchTerm = ({ onSearch, onClear }) => {
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="search-container">
      <img className="search-icon" alt="" src={searchIcon} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Filter Stocks"
      />
      {searchTerm.length > 0 && (
      <button
        onClick={onClear}
        type="button"
        className="search-clear-button"
      >
        <img className="clear" src={clearIcon} alt="" />
      </button>
      )}
    </div>
  );
};

SearchTerm.propTypes = {
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

SearchTerm.defaultProps = {
  onSearch: null,
  onClear: null,
};

export default SearchTerm;
