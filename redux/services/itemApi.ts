import { baseUrl } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
  reducerPath: "itemApi",
  refetchOnFocus: false,
  tagTypes: ["Item"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getItems: builder.query<[], null>({
      query: () => "item",
      providesTags: [{ type: "Item", id: "LIST" }],
    }),
  }),
});

export const { useGetItemsQuery } = itemApi;
