const { nabApi } = require("../nab");

function authHeaders(extraHeaders = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  return {
    ...extraHeaders,
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

const sessionApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // createSession
    createSession: builder.mutation({
      query: ({ locale } = {}) => {
        return {
          url: "/session/create",
          method: "POST",
          credentials: "include",
          headers: authHeaders({
            "Accept-Language": locale
          })
        };
      }
    }),

    // persist sesssion
    persistSession: builder.query({
      query: ({locale}) => ({
        url: "/session/me",
        method: "GET",

        credentials: "include",
        headers: authHeaders({
          "Accept-Language": locale
        })
      }),

      providesTags: ["Session"]
    }),

    // track session activity
    trackSession: builder.mutation({
      query: (body) => ({
        url: "/session/track",
        method: "POST",
        body,
        credentials: "include",
        headers: authHeaders()
      })
    })
  })
});

export const {
  useCreateSessionMutation,
  usePersistSessionQuery,
  useTrackSessionMutation
} = sessionApi;
