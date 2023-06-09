import { baseUrl } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bestSellingApi = createApi({
  reducerPath: "bestSellingApi",
  refetchOnFocus: false,
  tagTypes: ["bestSelling"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getBestSells: builder.query<[], null>({
      query: () => "best-selling",
      providesTags: [{ type: "bestSelling", id: "LIST" }],
    }),
  }),
});

export const { useGetBestSellsQuery } = bestSellingApi;
