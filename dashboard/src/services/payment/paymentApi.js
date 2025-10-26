import { nabApi } from "../nab";

const paymentApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all payments with pagination and optional search
    getPayments: build.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/payment/get-all-payments?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Payment"],
    }),

    // Get payment statistics
    getPaymentStatistics: build.query({
      query: () => ({
        url: `/payment/get-payment-statistics`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Payment"],
    }),

    // Get sales count by product
    getSalesCountByProduct: build.query({
      query: () => ({
        url: `/payment/get-sales-count-by-product`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Payment"],
    }),

    // Get payment details by ID
    getPaymentDetails: build.query({
      query: (id) => ({
        url: `/payment/get-payment-details/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Payment"],
    }),

    // Update payment status by ID
    updatePaymentStatus: build.mutation({
      query: ({ id, body }) => ({
        url: `/payment/update-payment-status/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
      invalidatesTags: ["Payment", "Admin"],
    }),

    // Delete payment by ID
    deletePayment: build.mutation({
      query: (id) => ({
        url: `/payment/delete-payment/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Payment", "Admin"],
    }),
  }),
});

export const {
  useGetPaymentsQuery,
  useGetPaymentStatisticsQuery,
  useGetSalesCountByProductQuery,
  useGetPaymentDetailsQuery,
  useUpdatePaymentStatusMutation,
  useDeletePaymentMutation,
} = paymentApi;