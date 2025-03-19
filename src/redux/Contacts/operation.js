import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONTACTS_URL } from "../../services/apiService";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(CONTACTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(CONTACTS_URL, contact, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      console.log("(In Operations) Updating contact:", contact);
      console.log("Updating at URL:", `${CONTACTS_URL}/${contact.id}`);
      const response = await axios.patch(
        // Change PUT to PATCH
        `${CONTACTS_URL}/${contact.id}`,
        {
          name: contact.name,
          number: contact.number,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: axios.defaults.headers.common.Authorization,
          },
        }
      );
      console.log("(In Operations) Contact updated:", response.data);
      return response.data;
    } catch (error) {
      console.log("(In Operations) Error updating contact:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${CONTACTS_URL}/${id}`);
      return { id }; // Doğru reducer işlemi için ID'yi döndür
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
