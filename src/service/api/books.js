import { baseApi } from "./index.js";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all books
    fetchBooks: builder.mutation({
      query: (param) => {
        return {
          url: "bs-catalog/bookstore/v1/books",
          method: "POST",
          body: {
            targetMethod: "GET",
            queryParams: {
              title: [param],
              author: [param],
            },
          },
        };
      },
    }),

    // Get a single book by ID
    bookById: builder.mutation({
      query: (id) => {
        return {
          url: `bs-catalog/bookstore/v1/books/${id}`,
          method: "POST",
          body: {
            targetMethod: "GET",
          },
        };
      },
    }),
    // Add a new book
    addBook: builder.mutation({
      query: (body) => {
        return {
          url: `bs-catalog/bookstore/v1/books`,
          method: "POST",
          body,
        };
      },
    }),
    // Update an existing book
    updateBook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `bs-catalog/bookstore/v1/books/${id}`,
        method: "PUT",
        body,
      }),
    }),
    // Delete a book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `bs-catalog/bookstore/v1/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const books = booksApi;

export const {
  useFetchBooksMutation,
  useBookByIdMutation,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = booksApi;
