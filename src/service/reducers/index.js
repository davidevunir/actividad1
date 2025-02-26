import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "../api/index";
import authSlice from "./auth";

const createRootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default createRootReducer;