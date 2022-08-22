import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export const __Getmovie = createAsyncThunk(
  "auth/movie/__Getmovie",
  async (payload, thunkAPI) => {
    const data = await instance
      .get("auth/movie")
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => error);
    // console.log(data);
    return thunkAPI.fulfillWithValue(data.data);
  }
);

const NetflixMovie = createSlice({
  name: "movie",
  initialState: {
    loaded: false,
    movie: [],
  },
  reducers: {},
  extraReducers: {
    [__Getmovie.fulfilled]: (state, action) => {
      state.loaded = true;
      //   console.log(action.payload);
    },
  },
});

export const { signInAction } = NetflixMovie.actions;
export default NetflixMovie.reducer;
