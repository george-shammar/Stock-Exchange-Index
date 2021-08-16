import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStock, loadData, selectFilteredAllStocks } from '../actions/index';
import Stock from '../components/Stock';
import FavoriteButton from '../components/FavoriteButton';
import '../Index.css';

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

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  // ===========================
  pageLimit = 5;
  dataLimit = 35;
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  const stockArray = allStocks.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  return (
    <div>
      {stockArray.length > 0 ? (
        <div className="stocks-container">
          {stockArray.map((stock) => (
            <Stock stock={stock} key={stock.symbol}>
              <FavoriteButton
                onClickHandler={() => onAddStockHandler(stock)}
              >
                Add to Watchlist
              </FavoriteButton>
            </Stock>
          ))}

          <div className="pagination my-5">
            <button
              type="button"
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              prev
            </button>

            {/* show page numbers */}
            {getPaginationGroup().map((item) => (
              <button
                type="button"
                key={item}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}

            <button
              type="button"
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              next
            </button>
          </div>
        </div>
      ) : (
        <p className="mx-5 my-5 px-5 py-5"> Loading your stock data...</p>
      )}
    </div>
  );
};

export default AllStocks;
