import { nabApi } from "../nab";

const cartApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // Add to cart
    addToCart: build.mutation({
      query: (cartItem) => ({
        url: "/cart/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: cartItem,
      }),
      invalidatesTags: ["Cart", "Admin"],
    }),

    // Get single user's cart
    getFromCart: build.query({
      query: () => ({
        url: "/cart/get-from-cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Cart"],
    }),

    // Get paginated carts (admin or listing)
    getCarts: build.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/cart/get-carts?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Cart"],
    }),

    // Delete from cart
    deleteCart: build.mutation({
      query: (id) => ({
        url: `/cart/delete-cart/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Cart", "Admin"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetFromCartQuery,
  useGetCartsQuery,
  useDeleteCartMutation,
} = cartApi;
