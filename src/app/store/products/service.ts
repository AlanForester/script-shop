import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "./types";

export const productsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Array<Product>, string>({
      query: (number) => ({
        params: { userId: "6401c5b3b6f14c86085ddf55" },
        url: "product/getAll",
      }),
    }),
  }),
  reducerPath: "productsAPI",
});
