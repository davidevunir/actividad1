import {baseApi} from "./index.js";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // Obtener todas las órdenes
    fetchOrders: builder.mutation({
        query: () => ({
          url: "bs-orders/bookstore/v1/orders",
          method: "POST",
          body: {
            targetMethod: "GET",
          },
        }),
      }),

    // Crear una orden
    createOrder: builder.mutation({
        query: (orderData) => ({
          url: 'bs-orders/bookstore/v1/orders',
          method: "POST",
          body: orderData,
        }),
      }),

      cancelOrder: builder.mutation({
        query: ( idOrder ) => ({
          url: `bs-orders/bookstore/v1/orders/${idOrder}`,
          method: "POST",
          body: {
            targetMethod: "PATCH",
            body: { status: "CANCELADO" },
          },
        }),
      }),

  }),
});



export const {
    useFetchOrdersMutation,
    useCreateOrderMutation,
    useCancelOrderMutation,
    } = ordersApi;