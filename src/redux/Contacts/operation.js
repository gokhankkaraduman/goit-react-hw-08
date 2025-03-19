import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONTACTS_URL } from "../../services/apiService";

const getContacts = createAsyncThunk(
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const addContact = createAsyncThunk(
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      console.log("(In Operations) Updating contact:", contact);
      const response = await axios.put(
        `${CONTACTS_URL}/${contact.id}`,
        {
          name: contact.name,
          number: contact.number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("(In Operations) Error updating contact:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${CONTACTS_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { getContacts, addContact, updateContact, removeContact };
