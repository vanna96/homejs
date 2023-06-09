import { baseUrl } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  refetchOnFocus: false,
  tagTypes: ["Banner"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getBanners: builder.query<[], null>({
      query: () => "banner",
      providesTags: [{ type: "Banner", id: "LIST" }],
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
