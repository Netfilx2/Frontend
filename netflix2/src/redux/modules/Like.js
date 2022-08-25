import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addLike = createAsyncThunk(
  "/auth/movie/{movieId}/like/__addLike",
  async (payload, thunkAPI) => {
    const data = await axios
      .put(`/auth/movie/{movieId}/like/${payload.id}`)
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
    [__addLike.fulfilled]: (state, action) => {
      state.basket.map((add) => {
        if (add.id === action.payload.id) {
          //add.id 랑 payload.id가 같으면
          return (
            (add.count = action.payload.count), // count에 payload.count를 넣고
            (add.totalCost = action.payload.totalCost),
            (add.basketTotalCost = action.payload.basketTotalCost) // totalCost에 payload.totalCost를 넣는다
          );
        }
        return add; // 마지막에 저거 위에 id가 겹치지 않을 때 보내준다.
      });
    },
  },
});

export const { signInAction } = movieLike.actions;
export default movieLike.reducer;
