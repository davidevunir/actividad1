import { combineReducers } from "@reduxjs/toolkit";

// Apis
import { baseApi } from "../api/index";

const createRootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export default createRootReducer;