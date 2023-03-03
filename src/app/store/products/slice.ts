import { createSlice } from "@reduxjs/toolkit";

const initialState: any = ["test"];

export const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {},
});

export default productsSlice.reducer;
