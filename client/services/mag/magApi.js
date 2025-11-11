const { nabApi } = require("../nab");

const magazineApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    getMagazines: builder.query({
      query: () => ({
        url: "/magazine/get-magazines",
        method: "GET"
      }),

      providesTags: ["Magazine","User"]
    }),

    // get a single magazine
    getMagazine: builder.query({
      query: (id) => ({
        url: `/magazine/get-magazine/${id}`,
        method: "GET"
      }),

      providesTags: ["Magazine"]
    }),

    // filtered magazines
    getFilteredMagazines: builder.mutation({
      query: (query) => ({
        url: `/magazine/filtered-magazines?${query}`,
        method: "GET"
      }),

      providesTags: ["Magazine"]
    })
  })
});

export const {
  useGetMagazinesQuery,
  useGetMagazineQuery,
  useGetFilteredMagazinesMutation
} = magazineApi;
