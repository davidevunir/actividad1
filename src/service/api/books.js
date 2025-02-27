import {baseApi} from "./index.js";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all books
    getBooks: builder.query({
      query: () => 'books',
    }),
    // Get a single book by ID
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),
    // Add a new book
    addBook: builder.mutation({
      query: (book) => ({
        url: 'books',
        method: 'POST',
        body: book,
      }),
    }),
    // Update an existing book
    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: 'PUT',
        body: book,
      }),
    }),
    // Delete a book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const books = booksApi;

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;