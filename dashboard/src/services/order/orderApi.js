import { nabApi } from "../nab";

const orderApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // Add to order
    addToOrder: build.mutation({
      query: (orderItem) => ({
        url: "/order/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: orderItem,
      }),
      invalidatesTags: ["Order", "Admin"],
    }),

    // Get single user's order
    getFromOrder: build.query({
      query: () => ({
        url: "/order/get-from-order",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Order"],
    }),

    // Get paginated orders (admin or listing)
    getOrders: build.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/order/get-orders?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Order"],
    }),

    // Delete from order
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/order/delete-order/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Order", "Admin"],
    }),

    // Update order status to shipped
    updateOrderStatusToShipped: build.mutation({
      query: ({ id, body }) => ({
        url: `/order/update-order-status-to-shipped/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
      invalidatesTags: ["Order", "Admin"],
    }),
  }),
});

export const {
  useAddToOrderMutation,
  useGetFromOrderQuery,
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderStatusToShippedMutation,
} = orderApi;