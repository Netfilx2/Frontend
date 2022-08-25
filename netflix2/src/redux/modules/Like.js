import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export const __changeLike = createAsyncThunk(
  "/auth/movie/{movieId}/like/__addLike",
  async (payload, thunkAPI) => {
    console.log(payload);
    const data = await instance
      .post(`/auth/movie/${payload}/like`)
      .then((res) => {
        const check = res.data;
        if (check.success === false) {
          alert(check.error.message);
        } else return alert("좋아요를 눌렀습니다");
      })
      .catch((error) => error);

    return thunkAPI.fulfillWithValue(data);
  }
);

const movieLike = createSlice({
  name: "like",
  initialState: {
    loaded: false,
    like: [],
  },
  reducers: {},
  extraReducers: {
    [__changeLike.fulfilled]: (state, action) => {
      state.basket.map((add) => {
        if (add.id === action.payload.id) {
          return;
        }
      });
    },
  },
});

export const { signInAction } = movieLike.actions;
export default movieLike.reducer;
