import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create New Item
export const createItem = createAsyncThunk('items/create', async (itemData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await itemService.createItem(itemData, token);
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
});

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createItem.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createItem.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items.push(payload);
        })
        .addCase(createItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});


export const {reset} = itemSlice.actions;
export default itemSlice.reducer;
