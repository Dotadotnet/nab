const { nabApi } = require("../nab");

const reviewApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Review
    addReview: builder.mutation({
      query: (body) => ({
        url: "/review/add-review",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        credentials: "include",
        body
      }),

      invalidatesTags: ["Review", "Product", "User","Session"]
    }),

    // remove review
    removeReview: builder.mutation({
      query: (id) => ({
        url: `/review/delete-review/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      }),

      invalidatesTags: ["Review", "Product", "User","Session"]
    })
  })
});

export const { useAddReviewMutation, useRemoveReviewMutation } = reviewApi;
