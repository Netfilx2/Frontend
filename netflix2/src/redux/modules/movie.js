import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export const __Getmovie = createAsyncThunk("auth/movie", async () => {
  try {
    const response = await instance.get("auth/movie");
    const data = response.data.data;

    return data;
  } catch (error) {}
});

const NetflixMovie = createSlice({
  name: "movie",
  initialState: {
    loaded: false,
    movie: [],
    dataList: [],
  },
  reducers: {},
  extraReducers: {
    [__Getmovie.fulfilled]: (state, action) => {
      state.loaded = true;
      state.movie = action.payload;
      state.dataList = action.payload;
    },
  },
});

export const { signInAction } = NetflixMovie.actions;
export default NetflixMovie.reducer;
