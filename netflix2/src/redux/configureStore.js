import { configureStore, combineReducers } from "@reduxjs/toolkit";
import member from "../redux/modules/member";
import movie from "./modules/movie";

const rootReducer = combineReducers({ member, movie });
const store = configureStore({ reducer: rootReducer });

export default store;
