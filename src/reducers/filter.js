
export function setSearchTerm(term) {
    return {
      type: 'searchTerm/setSearchTerm',
      payload: term
    }
  }
  
  export function clearSearchTerm() {
    return {
      type: 'searchTerm/clearSearchTerm'
    }
  }