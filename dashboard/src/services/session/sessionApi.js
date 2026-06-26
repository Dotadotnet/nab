import { nabApi } from "../nab";

const sessionApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    getSessions: builder.query({
      query: ({ page = 1, limit = 10, search = "" } = {}) => {
        const params = new URLSearchParams();
        params.append("page", page);
        params.append("limit", limit);
        if (search) params.append("search", search);

        return {
          url: `/session/all?${params.toString()}`,
          method: "GET"
        };
      },
      providesTags: ["Session"]
    }),

    getSession: builder.query({
      query: (id) => ({
        url: `/session/${id}`,
        method: "GET"
      }),
      providesTags: ["Session"]
    })
  })
});

export const { useGetSessionsQuery, useGetSessionQuery } = sessionApi;
