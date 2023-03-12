import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { value: 0 };

export const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
export const { increment } = basketSlice.actions;

export default basketSlice.reducer;
