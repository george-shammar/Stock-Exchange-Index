import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStock, loadData } from '../actions/index';
import Stock from '../components/Stock';
import FavoriteButton from '../components/FavoriteButton';
/* eslint-disable */
const AllStocks = () => {
  const favoriteIcon = 'https://w7.pngwing.com/pngs/997/899/png-transparent-red-heart-illustration-heart-icon-3d-red-heart-love-heart-emoticon-thumbnail.png';
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };

  useEffect(onFirstRender, []);

  const onAddStockHandler = (stock) => {
    dispatch(addStock(stock));
  };

  return (
    <div>
      {allStocks.map((stock) => (
        <Stock stock={stock} key={stock.id}>
          <FavoriteButton
            onClickHandler={() => onAddStockHandler(stock)}
            icon={favoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Stock>
      ))}
    </div>
  );
};

export default AllStocks;
