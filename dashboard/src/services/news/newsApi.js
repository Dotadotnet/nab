import { nabApi } from "../nab";

const newsApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: (body) => ({
        url: "/news/add-news",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
      invalidatesTags: ["News"],
    }),
    getNews: builder.query({
      query: () => ({
        url: "/news/get-news",
        method: "GET",
      }),
      providesTags: ["News"],
    }),
    getNewsTypes: builder.query({
      query: () => ({
        url: "/newsType/get-newsTypes",
        method: "GET",
      }),
      providesTags: ["NewsType"],
    }),
    getNewsCountries: builder.query({
      query: () => ({
        url: "/newsCountry/get-newsCountries",
        method: "GET",
      }),
      providesTags: ["NewsCountry"],
    }),
  }),
});

export const {
  useAddNewsMutation,
  useGetNewsQuery,
  useGetNewsTypesQuery,
  useGetNewsCountriesQuery,
} = newsApi;
