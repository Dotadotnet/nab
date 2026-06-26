const { nabApi } = require("../nab");

const categoryFilterApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryFilters: builder.query({
      query: ({ category, page = 1, limit = 100 } = {}) => ({
        url: "/category-filters/all",
        method: "GET",
        params: {
          page,
          limit,
          ...(category ? { category } : {}),
        },
      }),
      providesTags: ["CategoryFilter"],
    }),
  }),
});

export const { useGetCategoryFiltersQuery } = categoryFilterApi;
