import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8762/",
    credentials: "same-origin",
    jsonContentType: "application/json",
  }),
  endpoints: () => ({}),
});