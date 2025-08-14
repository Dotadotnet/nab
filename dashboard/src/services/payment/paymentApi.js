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
  useUpdatePaymentStatusMutation,
  useDeletePaymentMutation,
} = paymentApi;
