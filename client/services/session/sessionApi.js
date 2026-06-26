const { nabApi } = require("../nab");

const sessionApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // createSession
    createSession: builder.mutation({
      query: () => {
        return {
          url: "/session/create",
          method: "POST",
          credentials: "include"
        };
      },
      invalidatesTags: ["Session"]
    }),

    // persist sesssion
    persistSession: builder.query({
      query: ({locale}) => ({
        url: "/session/me",
        method: "GET",

        credentials: "include",
        headers: {
          "Accept-Language": locale
        }
      }),

      providesTags: ["Session"]
    }),

    // track session activity
    trackSession: builder.mutation({
      query: (body) => ({
        url: "/session/track",
        method: "POST",
        body,
        credentials: "include"
      }),
      invalidatesTags: ["Session"]
    })
  })
});

export const {
  useCreateSessionMutation,
  usePersistSessionQuery,
  useTrackSessionMutation
} = sessionApi;
