const initialState = ''

const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return state;
  }
}

const selectSearchTerm = (state) => state.searchTerm;

export { searchTermReducer, selectSearchTerm };