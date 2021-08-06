import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from '../actions/index';
import { selectSearchTerm } from '../reducers/filter';

const searchIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/768px-Search_Icon.svg.png';
const clearIcon = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/clear-2082112-1767251.png';

const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div>
      <img alt="" src={searchIcon} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Filter Stocks"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
        >
          <img src={clearIcon} alt="" />
        </button>
      )}
    </div>
  );
};

export default SearchTerm;
