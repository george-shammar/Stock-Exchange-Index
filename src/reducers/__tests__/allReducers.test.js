import allStocksReducer from '../allStocksReducer';

test('should return the initial state', () => {
  expect(allStocksReducer(undefined, {})).toEqual([]);
});

test('should return the initial state with empty array', () => {
  expect(allStocksReducer(undefined, {})).not.toEqual([{
    symbol: 'SYM', name: 'Biscuits', price: '4.5', exchange: 'NYSE',
  }]);
});

test('should return a defined initial state', () => {
  expect(allStocksReducer(undefined, {})).toBeDefined();
});

test('should return a truthy', () => {
  expect(allStocksReducer(undefined, {})).toBeTruthy();
});
