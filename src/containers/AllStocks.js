import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStock, loadData, selectFilteredAllStocks } from '../actions/index';
import Stock from '../components/Stock';
import FavoriteButton from '../components/FavoriteButton';
import '../Index.css';

const AllStocks = () => {
  const allStocks = useSelector(selectFilteredAllStocks);
  const favoriteIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX5-hcbQJZPqRel9CryvQoc-_UQ7yg1oZIQ&usqp=CAU';
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
