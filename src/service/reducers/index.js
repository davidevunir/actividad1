import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from "../api/index.js";
import createRootReducer from "../reducers";

export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);