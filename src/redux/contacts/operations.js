import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
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
      const { data } = await instance.post("/contacts", newContact);
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async (contactId, thunkApi) => {
//     try {
//       const { data } = await instance.patch(`/contacts/${contactId}`);
//       console.log(data);
//       return data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );
