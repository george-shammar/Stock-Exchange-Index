import favoriteStocksReducer from '../favoritStocksReducer';
import { addStock, removeStock } from '../../actions/index';

const stock = {
  symbol: 'SYM', name: 'Biscuits', price: '4.5', exchange: 'NYSE',
};

test('should handle a stock being added to an empty favorite list', () => {
  const previousState = [];
  expect(favoriteStocksReducer(previousState, addStock(stock))).toEqual([{
    symbol: 'SYM',
    name: 'Biscuits',
    price: '4.5',
    exchange: 'NYSE',
  },
  ]);
});

test('should handle the correct stock being added to an empty favorite list', () => {
  const previousState = [];
  expect(favoriteStocksReducer(previousState, addStock(stock))).not.toEqual([{
    symbol: 'Hey',
    name: 'Apple',
    price: '1.2',
    exchange: 'NYSE',
  },
  ]);
});

test('should have a defined stock addition', () => {
  const previousState = [];
  expect(favoriteStocksReducer(previousState, addStock(stock))).toBeDefined();
});

test('should have a defined stock addition', () => {
  const previousState = [];
  expect(favoriteStocksReducer(previousState, addStock(stock))).toBeDefined();
});

test('should have a defined stock addition', () => {
  const previousState = [];
  expect(favoriteStocksReducer(previousState, addStock(stock))).toBeTruthy();
});

test('should handle a stock being removed from a favorite list', () => {
  const previousState = [{
    symbol: 'SYM',
    name: 'Biscuits',
    price: '4.5',
    exchange: 'NYSE',
  }];
  expect(favoriteStocksReducer(previousState, removeStock(stock))).toEqual([]);
});

test('should remove the correct stock object', () => {
  const previousState = [{
    symbol: 'SYM',
    name: 'Biscuits',
    price: '4.5',
    exchange: 'NYSE',
  }];
  expect(favoriteStocksReducer(previousState, removeStock(stock))).not.toEqual([stock]);
});

test('should remove the correct stock object', () => {
  const previousState = [{
    symbol: 'SYM',
    name: 'Biscuits',
    price: '4.5',
    exchange: 'NYSE',
  }];
  expect(favoriteStocksReducer(previousState, removeStock(stock))).toBeTruthy();
});

test('should remove the correct stock object', () => {
  const previousState = [{
    symbol: 'SYM',
    name: 'Biscuits',
    price: '4.5',
    exchange: 'NYSE',
  }];
  expect(favoriteStocksReducer(previousState, removeStock(stock))).toBeDefined();
});
