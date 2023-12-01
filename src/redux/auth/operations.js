import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
    BASE_URL.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export const clearToken = () => {
    BASE_URL.defaults.headers['Authorization'] = '';
}

export const registerUserThunk = createAsyncThunk('auth/register', async (body, thunkApi) => {
    try {
        const { data } = await BASE_URL.post('/users/signup', body);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const loginUserThunk = createAsyncThunk('auth/login', async (body, thunkApi) => {
    try {
        const { data } = await BASE_URL.post('/users/login', body)
        setToken(data.token);
        return data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logOutUserThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    const { data } = await BASE_URL.post('/users/logout')
    clearToken();
    return data
});

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token){
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
        setToken(token)
        const { data } = await BASE_URL.get('/users/current');

        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})