const { nabApi } = require("../nab");

const sessionApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // createSession
    createSession: builder.mutation({
      query: ({ locale } = {}) => {
        return {
          url: "/session/create",
          method: "POST",
          credentials: "include",
          headers: {
            "Accept-Language": locale
          }
        };
      }
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
      })
    })
  })
});

export const {
  useCreateSessionMutation,
  usePersistSessionQuery,
  useTrackSessionMutation
} = sessionApi;
