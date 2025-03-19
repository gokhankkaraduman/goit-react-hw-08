import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  updateContact,
  removeContact,
} from "./operation";
import { toast, Bounce } from "react-toastify";

const initialState = {
  items: [
  ],
  loadingStates: {
    fetch: false,
    add: false,
    update: false,
    delete: false,
  },
  error: null,
};

const toastSettings = {
  success: {
    icon: "✅",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    position: "top-right",
  },
  error: {
    icon: "❌",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    position: "top-right",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loadingStates.fetch = false;
        state.error = null;
        toast.success("Your contacts are ready!", toastSettings.success);
      })
      .addCase(getContacts.pending, (state) => {
        state.loadingStates.fetch = true;
        state.error = null;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.fetch = false;
        toast.error("Failed to your contacts!", toastSettings.error);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loadingStates.add = false;
        state.error = null;
        toast.success("Contact added successfully!", toastSettings.success);
      })
      .addCase(addContact.pending, (state) => {
        state.loadingStates.add = true;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.add = false;
        toast.error("Failed to add contact!", toastSettings.error);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.loadingStates.update = false;
        toast.success("Contact updated successfully!", toastSettings.success);
      })
      .addCase(updateContact.pending, (state) => {
        state.loadingStates.update = true;
        state.error = null;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.update = false;
        toast.error("Failed to update contact!", toastSettings.error);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loadingStates.delete = false;
        state.error = null;
        toast.success("Contact deleted successfully!", toastSettings.success);
      })
      .addCase(removeContact.pending, (state) => {
        state.loadingStates.delete = true;
        state.error = null;
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.delete = false;
        toast.error("Failed to delete contact!", toastSettings.error);
      });
  },
});

export default contactsSlice.reducer;
