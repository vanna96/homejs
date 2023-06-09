import { baseUrl } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  refetchOnFocus: false,
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<[], null>({
      query: () => "category",
      providesTags: [{ type: "Category", id: "LIST" }],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
