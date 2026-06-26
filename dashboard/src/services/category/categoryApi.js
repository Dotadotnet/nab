

import { nabApi } from "../nab";

function buildCategoryTree(categories = []) {
  const map = new Map();
  const roots = [];

  categories.forEach((category) => {
    map.set(category._id, {
      ...category,
      name: category.title,
      children: []
    });
  });

  map.forEach((category) => {
    const parentId =
      typeof category.parent === "object" ? category.parent?._id : category.parent;

    if (parentId && map.has(parentId)) {
      map.get(parentId).children.push(category);
    } else {
      roots.push(category);
    }
  });

  return roots;
}

const categoryApi = nabApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/category/add-category",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: category,
      }),

      invalidatesTags: ["Category", "User"],
    }),

    // get all categories
    getCategories: builder.query({
      query: () => ({
        url: "/category/get-categories",
        method: "GET",
      }),

      providesTags: ["Category"],
    }),

    getCategoryTree: builder.query({
      query: () => ({
        url: "/category/get-categories",
        method: "GET",
      }),
      transformResponse: (response) => ({
        ...response,
        data: buildCategoryTree(response?.data || []),
      }),
      providesTags: ["Category"],
    }),

    // update category
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `/category/update-category/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Category", "User"],
    }),

    // get a category
    getCategory: builder.query({
      query: (id) => ({
        url: `/category/get-category/${id}`,
        method: "GET",
      }),

      providesTags: ["Category"],
    }),

    // delete category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete-category/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Category", "User"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryTreeQuery,
  useUpdateCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} = categoryApi;
