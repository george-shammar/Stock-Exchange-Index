import React from 'react';
import { useDispatch } from 'react-redux';
import { removeStock } from '../actions/index';
import FavoriteButton from '../components/FavoriteButton';
import Stock from '../components/Stock';

const unfavoriteIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Broken_heart.svg/586px-Broken_heart.svg.png';

const FavoriteStocks = () => {
  const dispatch = useDispatch();

  const onRemoveStockHandler = (stock) => {
    dispatch(removeStock(stock));
  };

  // Helper Function
  const createStockComponent = (stock) => (
    <Stock stock={stock} key={stock.id}>
      <FavoriteButton
        onClickHandler={() => onRemoveStockHandler(stock)}
        icon={unfavoriteIcon}
      >
        Remove Favorite
      </FavoriteButton>
    </Stock>
  );
  // const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);

  return (
    <div>
      {favoriteStocks.map(createStockComponent)}
    </div>
  );
};

export default FavoriteStocks;
