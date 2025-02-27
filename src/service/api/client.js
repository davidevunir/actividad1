import { baseApi } from "./index.js";

const clientsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // Buscar cliente por email
    fetchClient: builder.mutation({
      query: (params) => ({
        url: "bs-clients/bookstore/v1/clients",
        method: "POST",
        body: params,
      }),
    }),

    // Crear un nuevo cliente
    createClient: builder.mutation({
      query: (data) => ({
        url: "bs-clients/bookstore/v1/clients",
        method: "POST",
        body: data,
      }),
    }),

    updateClient: builder.mutation({
        query: ({ idClient, updatedData }) => ({
          url: `bs-clients/bookstore/v1/clients/${idClient}`,
          method: "POST",
          body: {
            targetMethod: "PATCH",
            body: updatedData,
          },
        }),
      }),
  
      deleteClient: builder.mutation({
        query: (idClient) => ({
          url: `bs-clients/bookstore/v1/clients/${idClient}`,
          method: "POST",
          body: {
            targetMethod: "DELETE",
          },
        }),
    }),

  }),
});

export const { useFetchClientMutation, useCreateClientMutation, useUpdateClientMutation, useDeleteClientMutation } = clientsApi;