import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {books} from "../api/books.js";

export const index = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [books.reducerPath]: books.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(books.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(index.dispatch);