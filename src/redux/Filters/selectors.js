export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;
export const selectFilteredContacts = (state) => state.filters.filteredContacts;
export const selectSearchType = (state) => state.filters.searchType;
export const selectSortType = (state) => state.filters.sortType;

// Helper selector to determine if filtering is active
export const selectIsFiltering = (state) =>
  Boolean(state.filters.name || state.filters.number);
