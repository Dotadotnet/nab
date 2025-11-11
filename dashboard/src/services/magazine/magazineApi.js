import { nabApi } from "../nab";

const magazineApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new magazine
    addMagazine: builder.mutation({
      query: (body) => ({
        url: "/magazine/add-magazine",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Magazine", "User"],
    }),

    // get all magazines
    getMagazines: builder.query({
      query: () => ({
        url: "/magazine/get-magazines",
        method: "GET",
      }),

      providesTags: ["Magazine"],
    }),

    // update magazine
    updateMagazine: builder.mutation({
      query: ({ id, body }) => ({
        url: `/magazine/update-magazine/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Magazine", "User"],
    }),

    // get a magazine
    getMagazine: builder.query({
      query: (id) => ({
        url: `/magazine/get-magazine/${id}`,
        method: "GET",
      }),

      providesTags: ["Magazine"],
    }),

    // delete a magazine
    deleteMagazine: builder.mutation({
      query: (id) => ({
        url: `/magazine/delete-magazine/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Magazine", "User"],
    }),
  }),
});

export const {
  useAddMagazineMutation,
  useGetMagazinesQuery,
  useUpdateMagazineMutation,
  useGetMagazineQuery,
  useDeleteMagazineMutation,
} = magazineApi;