import { baseUrl } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const incomingApi = createApi({
  reducerPath: "incomingApi",
  refetchOnFocus: false,
  tagTypes: ["Incoming"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getIncomings: builder.query<[], null>({
      query: () => "incoming",
      providesTags: [{ type: "Incoming", id: "LIST" }],
    }),
  }),
});

export const { useGetIncomingsQuery } = incomingApi;
