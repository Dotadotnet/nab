import { nabApi } from "../nab";

export const productAttributeApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    createProductAttribute: builder.mutation({
      query: (body) => ({
        url: "/product-attributes/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ProductAttribute"],
    }),
    getProductAttributes: builder.query({
      query: ({ page = 1, limit = 10, search = "" } = {}) => ({
        url: "/product-attributes/all",
        method: "GET",
        params: { page, limit, ...(search ? { search } : {}) },
      }),
      providesTags: ["ProductAttribute"],
    }),
    getProductAttribute: builder.query({
      query: (id) => ({
        url: `/product-attributes/${id}`,
        method: "GET",
      }),
      providesTags: ["ProductAttribute"],
    }),
    updateProductAttribute: builder.mutation({
      query: ({ id, body }) => ({
        url: `/product-attributes/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ProductAttribute", "Product"],
    }),
    reorderProductAttributes: builder.mutation({
      query: (body) => ({
        url: "/product-attributes/reorder",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ProductAttribute"],
    }),
    deleteProductAttribute: builder.mutation({
      query: (id) => ({
        url: `/product-attributes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProductAttribute"],
    }),
  }),
});

export const {
  useCreateProductAttributeMutation,
  useGetProductAttributesQuery,
  useGetProductAttributeQuery,
  useUpdateProductAttributeMutation,
  useReorderProductAttributesMutation,
  useDeleteProductAttributeMutation,
} = productAttributeApi;
