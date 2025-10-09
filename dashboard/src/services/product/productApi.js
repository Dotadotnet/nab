import { nabApi } from "../nab";

const productApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new product
    addProduct: builder.mutation({
      query: (body) => ({
        url: "/product/add-product",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body
      }),

      invalidatesTags: ["Product", "Category", "User"]
    }),

    // get all products
    getProducts: builder.query({
      query: () => ({
        url: "/product/get-products",
        method: "GET",
        headers: {
          "Accept-Language": "fa" // Default to Persian for dashboard
        }
      }),

      providesTags: ["Product"]
    }),

    // update product
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/product/update-product/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body
      }),

      invalidatesTags: ["Product", "Category", "User"]
    }),
    //update prodduct Approve
    updateProductApprove: builder.mutation({
      query: ({ id }) => ({
        url: `/product/update-product-approve/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: {}
      }),
      invalidatesTags: ["Product", "Category", "User"]
    }),
    // بازبینی محصول
    updateProductReview: builder.mutation({
      query: ({ id }) => ({
        url: `/product/update-product-review/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: {}
      }),
      invalidatesTags: ["Product", "Category", , "User"]
    }),

    updateProductReject: builder.mutation({
      query: ({ id, message }) => ({
        url: `/product/update-product-reject/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: {
          rejectedMessage: message // پیام رد
        }
      }),
      invalidatesTags: ["Product", "Category", "User"]
    }),

    updateProductStatus: builder.mutation({
      query: ({ id, message }) => ({
        url: `/product/update-product-status/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: {}
      }),
      invalidatesTags: ["Product", "Category", "User"]
    }),

    // get a single product
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/get-product/${id}`,
        method: "GET",
        headers: {
          "Accept-Language": "fa" // Default to Persian for dashboard
        }
      }),

      providesTags: ["Product"]
    }),

    // filtered products
    getFilteredProducts: builder.mutation({
      query: (query) => ({
        url: `/product/filtered-products?${query}`,
        method: "GET"
      }),

      providesTags: ["Product"]
    }),

    // delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete-product/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      }),

      invalidatesTags: ["Product", "Category", "User"]
    }),

    // update individual product field
    updateProductField: builder.mutation({
      query: ({ id, field, value }) => ({
        url: `/product/update-product-field/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: { field, value }
      }),

      invalidatesTags: ["Product"]
    }),

    // update product features
    updateProductFeatures: builder.mutation({
      query: ({ id, features }) => ({
        url: `/product/update-product-features/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: { features }
      }),

      invalidatesTags: ["Product"]
    }),

    // update product images
    updateProductImages: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/product/update-product-images/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: formData
      }),

      invalidatesTags: ["Product"]
    }),

    // update product variation
    updateProductVariation: builder.mutation({
      query: ({ variationId, price, stock, lowStockThreshold }) => ({
        url: `/product/update-product-variation`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: { variationId, price, stock, lowStockThreshold }
      }),

      invalidatesTags: ["Product"]
    }),

    // adjust variation stock
    adjustVariationStock: builder.mutation({
      query: ({ variationId, adjustment, operation }) => ({
        url: `/product/adjust-variation-stock`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: { variationId, adjustment, operation }
      }),

      invalidatesTags: ["Product"]
    })
  })
});

export const {
  useUpdateProductApproveMutation,
  useUpdateProductRejectMutation,
  useUpdateProductReviewMutation,
  useUpdateProductStatusMutation,
  useAddProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useGetProductQuery,
  useGetFilteredProductsMutation,
  useDeleteProductMutation,
  useUpdateProductFieldMutation,
  useUpdateProductFeaturesMutation,
  useUpdateProductImagesMutation,
  useUpdateProductVariationMutation,
  useAdjustVariationStockMutation
} = productApi;
