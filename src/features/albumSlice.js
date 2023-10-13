import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    albums: [],
    error: "",
    selected: {},
};

export const fetchItems = createAsyncThunk("get/artworks", (data) => {
  return axios
    .get(`https://corsproxy.io/?https://api.artic.edu/api/v1/artworks?page=${data.page}&limit=${data.limit}`,
    {
      headers: {},
    })
      .then((res) => {
        return res.data; 
      }
    )
});

export const getItem = createAsyncThunk("get/details", (id) => {
  return axios
    .get(`https://corsproxy.io/?https://api.artic.edu/api/v1/artworks/${id}`,
    {
      headers: {},
    })
      .then((res) => {
        return res;
      }
    )
});
  
const albumSlice = createSlice({
  name: "album",
  initialState,
  extraReducers: (builder) => {
    //Fetch items
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.albums = [...state.albums, ...action.payload.data];
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //Fetch details
    builder.addCase(getItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.loading = false;
      state.selected = action.payload;
      state.error = "";
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
  
export default albumSlice.reducer;