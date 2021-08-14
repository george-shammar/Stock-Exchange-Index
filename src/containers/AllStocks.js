import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStock, loadData, selectFilteredAllStocks } from '../actions/index';
import Stock from '../components/Stock';
import FavoriteButton from '../components/FavoriteButton';
import '../Index.css';

/* eslint-disable */
const AllStocks = () => {

   // =========================
   const allStocks = useSelector(selectFilteredAllStocks);
   const dispatch = useDispatch();
 
   const onFirstRender = () => {
     dispatch(loadData());
   };
 
   useEffect(onFirstRender, []);
 
   const onAddStockHandler = (stock) => {
     dispatch(addStock(stock));
   };

  // =========================
  let pageLimit;
  let dataLimit;

  const [pages] = useState(Math.round(allStocks.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

// ===========================
  pageLimit= 5;
  dataLimit= 35;
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  const stockArray = allStocks.slice(startIndex, endIndex)
  
    return (
    <div className="stocks-container">
     {allStocks.slice(startIndex, endIndex).map((stock) => (
        <Stock stock={stock} key={stock.symbol}>
        <FavoriteButton
          onClickHandler={() => onAddStockHandler(stock)}
        >
          Add to Watchlist
        </FavoriteButton>
      </Stock>
      ))}

      {/* {allStocks.map((stock) => (
        <Stock stock={stock} key={stock.symbol}>
          <FavoriteButton
            onClickHandler={() => onAddStockHandler(stock)}
          >
            Add to Watchlist
          </FavoriteButton>
        </Stock>
      ))} */}

    {/* ======================== */}
    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
  </div>
  );
};

export default AllStocks;
