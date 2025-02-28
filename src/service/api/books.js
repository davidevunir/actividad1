import { baseApi } from "./index.js";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all books
    fetchBooks: builder.mutation({
      query: (params) => {
        return {
          url: "bs-catalog/bookstore/v1/books",
          method: "POST",
          body: {
            targetMethod: "GET",
            queryParams: {
              title: [params],
              // author: [params],
            },
          },
        };
      },
    }),

    // Get a single book by ID
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),

    fetchBooksById: builder.query({
      query: ({ params, id }) => ({
        url: `bs-catalog/bookstore/v1/books/${id}`,
        method: "POST",
        body: {
          targetMethod: "GET",
          queryParams: { ...params },
        },
      }),
    }),

    // Add a new book
    addBook: builder.mutation({
      query: (book) => ({
        url: "books",
        method: "POST",
        body: book,
      }),
    }),
    // Update an existing book
    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: book,
      }),
    }),
    // Delete a book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const books = booksApi;

export const {
  useFetchBooksMutation,
  useFetchBooksByIdQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
