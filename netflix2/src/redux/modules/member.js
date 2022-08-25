import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "./instance";

// 로그인
export const __postMemberlogin = createAsyncThunk(
  "member/__postMemberlogin",
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await instance
      .post("/member/login", {
        email: payload.newMemberlogin.memberId,
        password: payload.newMemberlogin.memberPassword,
      })
      .then((res) => {
        const memberCheck = res.data;
        // const ReToken = res.headers["refresh-token"];
        const Token = res.headers["authorization"];
        console.log(res);
        if (memberCheck.success === false) {
          alert(memberCheck.error.message);
        } else {
          localStorage.setItem("Token", Token);
          // localStorage.setItem("Retoken", ReToken);
          return alert("환영합니다"), window.location.replace("/Movies");
        }
      })
      .catch((error) => error);

    return thunkAPI.fulfillWithValue(resData);
  }
);

//회원가입
export const __postMember = createAsyncThunk(
  "member/__postMember",
  async (payload, thunkAPI) => {
    const resData = await axios
      .post("http://54.180.89.34:8080/member/signup", {
        nickname: payload.newMember.memberId,
        password: payload.newMember.memberPassword,
        passwordCheck: payload.newMember.memberPasswordCheck,
        email: payload.newMember.memberEmail,
      })
      .then((res) => {
        const check = res.data;
        if (check.success === false) {
          alert(check.error.message);
        } else return alert("환영합니다"), window.location.replace("/login");
      })
      .catch((error) => console.log(error));
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData);
  }
);

//로그아웃
export const __PostLogout = createAsyncThunk(
  "basket/__PostLogout",
  async (payload, thunkAPI) => {
    const data = await instance
      .post("/auth/member/logout", {
        instance,
      })
      .then((res) => res.data)
      .catch((error) => error);

    return thunkAPI.fulfillWithValue(data);
  }
);

const memberSlice = createSlice({
  name: "member",
  initialState: {
    member: [],
    loginStatus: false,
  },
  reducers: {},
  //슬라이스를 건드림 extraReducers 영향이 있다
  extraReducers: (builder) => {
    builder.addCase(__postMember.fulfilled, (state, action) => {
      state.nickname = action.payload.memberName;
      state.loginStatus = true;
    });
  },
});
export const { signInAction } = memberSlice.actions;
export default memberSlice.reducer;
