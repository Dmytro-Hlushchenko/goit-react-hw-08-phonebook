import { createSlice } from '@reduxjs/toolkit';
import { registerUserThunk, loginUserThunk, logOutUserThunk, refreshUserThunk } from 'redux/operations';


export const initialState = {
    user: null,
    isLoading: false,
    error: null,
    token: null,
    registrated: false,
    isRefreshing: false,

}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder =>
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled,  (state, action) =>{
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
        state.token = action.payload.token;
        state.registrated = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registrated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.registrated = false;
      })
       .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
         state.error = null;
         state.isRefreshing = true;
         
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registrated = true;
        state.user = action.payload;
        state.isRefreshing = false;
        
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isRefreshing = false;
        
      })
      .addCase(logOutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registrated = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logOutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
})

export const authReducer = authSlice.reducer;