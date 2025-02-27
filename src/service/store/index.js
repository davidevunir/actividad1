import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import createRootReducer from "../reducers";

import { baseApi } from "../api/index";

const index = configureStore({
  reducer: createRootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of rtk-query.
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see setupListeners docs - takes an optional callback as the 2nd arg for customization
setupListeners(index.dispatch);

export default index;