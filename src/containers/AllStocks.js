import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStock, loadData, selectFilteredAllStocks } from '../actions/index';
import Stock from '../components/Stock';
import FavoriteButton from '../components/FavoriteButton';
import '../Index.css';

const AllStocks = () => {
  const allStocks = useSelector(selectFilteredAllStocks);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };

  useEffect(onFirstRender, []);

  const onAddStockHandler = (stock) => {
    dispatch(addStock(stock));
  };

  return (
    <div className="stocks-container">
      {allStocks.map((stock) => (
        <Stock stock={stock} key={stock.id}>
          <FavoriteButton
            onClickHandler={() => onAddStockHandler(stock)}
          >
            Add to Watchlist
          </FavoriteButton>
        </Stock>
      ))}
    </div>
  );
};

export default AllStocks;
