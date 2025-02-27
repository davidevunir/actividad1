import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {books} from "../api/books.js";
import {baseApi} from "../api/index.js";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [books.reducerPath]: books.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(books.middleware),
});

setupListeners(store.dispatch);