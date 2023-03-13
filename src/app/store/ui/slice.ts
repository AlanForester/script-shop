import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  backArrow: {
    gotTo: "",
    isVisible: false,
  },
};

export const uiSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    hideBackArrow: (state) => {
      state.backArrow = { goTo: "", isVisible: false };
    },
    showBackArrow: (state, { payload }: PayloadAction<{ goTo: string }>) => {
      state.backArrow = { goTo: payload.goTo, isVisible: true };
    },
  },
});
export const { showBackArrow, hideBackArrow } = uiSlice.actions;

export default uiSlice.reducer;
