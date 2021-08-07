import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStock, selectFilteredFavoriteStocks } from '../actions/index';
import FavoriteButton from '../components/FavoriteButton';
import Stock from '../components/Stock';
import '../Index.css';

const FavoriteStocks = () => {
  const dispatch = useDispatch();

  const onRemoveStockHandler = (stock) => {
    dispatch(removeStock(stock));
  };

  const createStockComponent = (stock) => (
    <Stock stock={stock} key={stock.id}>
      <FavoriteButton
        onClickHandler={() => onRemoveStockHandler(stock)}
      >
        Remove from Watchlist
      </FavoriteButton>
    </Stock>
  );
  const favoriteStocks = useSelector(selectFilteredFavoriteStocks);

  return (
    <div className="stocks-container">
      {favoriteStocks.map(createStockComponent)}
    </div>
  );
};

export default FavoriteStocks;
