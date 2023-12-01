import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUserThunk = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        setToken(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const loginUserThunk = createAsyncThunk('auth/login', async (logInUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', logInUser);
        setToken(response.data.token);
        return response.data;
    } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
    }
});

export const logOutUserThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearToken();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
        return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
        setToken(token);
        const response = await axios.get('/users/current');
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});

