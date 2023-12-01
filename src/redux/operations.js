import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAllContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const addContactThunk = createAsyncThunk('contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });