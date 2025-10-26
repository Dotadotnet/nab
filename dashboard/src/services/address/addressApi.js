import { nabApi } from "../nab";

const addressApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // Add to address
    addToAddress: build.mutation({
      query: (addressItem) => ({
        url: "/address/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: addressItem,
      }),
      invalidatesTags: ["Address", "Admin"],
    }),

    // Get single user's address
    getFromAddress: build.query({
      query: () => ({
        url: "/address/get-from-address",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Address"],
    }),

    // Get paginated addresses (admin or listing)
    getAddresses: build.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/address/get-addresses?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Address"],
    }),

    // Delete from address
    deleteAddress: build.mutation({
      query: (id) => ({
        url: `/address/delete-address/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Address", "Admin"],
    }),
  }),
});

export const {
  useAddToAddressMutation,
  useGetFromAddressQuery,
  useGetAddressesQuery,
  useDeleteAddressMutation,
} = addressApi;