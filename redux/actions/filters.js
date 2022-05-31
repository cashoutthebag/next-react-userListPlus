export function setSortBy(sort) {
  return { type: 'SET_SORT_BY', payload: sort };
}

export function setSearchByName(name) {
  return {
    type: 'SET_SEARCH_BY_NAME',
    payload: name,
  };
}