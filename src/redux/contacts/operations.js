import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await axios.get(
        "https://66d1bd4862816af9a4f4b806.mockapi.io/api/v1/contact"
      );
      console.log(data);
      return data.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d1bd4862816af9a4f4b806.mockapi.io/api/v1/contact/${contactId}`
      );
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post(
        "https://66d1bd4862816af9a4f4b806.mockapi.io/api/v1/contact",
        newContact
      );
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
