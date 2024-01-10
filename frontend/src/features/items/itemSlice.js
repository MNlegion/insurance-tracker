import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
});


export const {reset} = itemSlice.actions;
export default itemSlice.reducer;
