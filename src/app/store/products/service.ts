import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProduct } from "../../../shared/types";

export const productsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Array<IProduct>, string>({
      query: (userId) => ({
        params: { userId },
        url: "product/getAll",
      }),
    }),
  }),
  reducerPath: "productsAPI",
});
