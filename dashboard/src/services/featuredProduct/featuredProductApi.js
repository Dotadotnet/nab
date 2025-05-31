

import { nabApi } from "../nab";

const featuredProductApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    addFeaturedProduct: builder.mutation({
      query: (featuredProduct) => ({
        url: "/featuredProduct/add-featuredProduct",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: featuredProduct,
      }),

      invalidatesTags: ["FeaturedProduct", "User"],
    }),

    // get all categories
    getFeaturedProducts: builder.query({
      query: () => ({
        url: "/featuredProduct/get-featuredProducts",
        method: "GET",
      }),

      providesTags: ["FeaturedProduct"],
    }),

    // update featuredProduct
    updateFeaturedProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/featuredProduct/update-featuredProduct/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["FeaturedProduct", "User"],
    }),

    // get a featuredProduct
    getFeaturedProduct: builder.query({
      query: (id) => ({
        url: `/featuredProduct/get-featuredProduct/${id}`,
        method: "GET",
      }),

      providesTags: ["FeaturedProduct"],
    }),

    // delete featuredProduct
    deleteFeaturedProduct: builder.mutation({
      query: (id) => ({
        url: `/featuredProduct/delete-featuredProduct/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["FeaturedProduct", "User"],
    }),
  }),
});

export const {
  useAddFeaturedProductMutation,
  useGetFeaturedProductsQuery,
  useUpdateFeaturedProductMutation,
  useGetFeaturedProductQuery,
  useDeleteFeaturedProductMutation,
} = featuredProductApi;
