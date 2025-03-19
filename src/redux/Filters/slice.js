import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  updateContact,
  removeContact,
} from "../Contacts/operation";

const initialState = {
  name: "",
  number: "",
  filteredContacts: [],
  searchType: "name",
  sortType: "creationDate",
};

const filterProcess = (filter, contacts, searchType) => {
  if (!filter || !contacts || !contacts.length) {
    return contacts || [];
  }
  return contacts.filter((contact) => {
    if (searchType === "name") {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else if (searchType === "number") {
      return contact.number.includes(filter);
    }
    return true;
  });
};

const sortContacts = (contacts, sortType) => {
  if (!contacts || !contacts.length) {
    return [];
  }
  return [...contacts].sort((a, b) => {
    switch (sortType) {
      case "name":
        return a.name.localeCompare(b.name);
      case "number":
        return a.number.localeCompare(b.number);
      case "creationDate":
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        return 0;
    }
  });
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload.filter;
      state.number = "";
      const filtered = filterProcess(
        action.payload.filter,
        action.payload.contacts,
        "name"
      );
      state.filteredContacts = sortContacts(filtered, state.sortType);
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload.filter;
      state.name = "";
      const filtered = filterProcess(
        action.payload.filter,
        action.payload.contacts,
        "number"
      );
      state.filteredContacts = sortContacts(filtered, state.sortType);
    },
    changeSearchType: (state, action) => {
      state.searchType = action.payload;
      if (state.searchType === "name") {
        state.number = "";
      } else {
        state.name = "";
      }
      state.filteredContacts = sortContacts(
        action.payload.contacts,
        state.sortType
      );
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload.sortType;
      state.filteredContacts = sortContacts(
        action.payload.contacts || state.filteredContacts,
        state.sortType
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.filteredContacts = sortContacts(action.payload, state.sortType);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const updatedContacts = [...state.filteredContacts, action.payload];
        state.filteredContacts = sortContacts(updatedContacts, state.sortType);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.filteredContacts = state.filteredContacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.filteredContacts = sortContacts(
          state.filteredContacts,
          state.sortType
        );
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.filteredContacts = state.filteredContacts.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.filteredContacts = sortContacts(
          state.filteredContacts,
          state.sortType
        );
      });
  },
});

export const {
  changeNameFilter,
  changeNumberFilter,
  changeSearchType,
  changeSortType,
} = filtersSlice.actions;

export default filtersSlice.reducer;
