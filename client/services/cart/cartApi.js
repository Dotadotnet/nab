const { nabApi } = require("../nab");

const cartApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // add to cart
    addToCart: build.mutation({
      query: (body) => ({
        url: "/cart/add-to-cart",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        credentials: "include",
        body
      }),

      invalidatesTags: ["Cart", "User", "Session"]
    }),

    // get from cart
    getCart: build.query({
      query: ({ id, locale }) => ({
        url: `/cart/get-cart/${id}`,
        method: "GET",
        credentials: "include",

        headers: {
          "Accept-Language": locale || "fa"
        }
      }),

      providesTags: ["Cart"]
    }),

    // delete from cart
    deleteFromCart: build.mutation({
      query: (id) => ({
        url: `/cart/delete-cart/${id}`,
        method: "DELETE",
        credentials: "include",

      }),

      invalidatesTags: ["Cart", "User", "Session"]
    })
  })
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useDeleteFromCartMutation
} = cartApi;
