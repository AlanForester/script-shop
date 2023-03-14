import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../../shared/types";

type IProductInBasket = {
  amount: number;
  product: IProduct;
};

type IInitialState = {
  productsInBasket: Record<string, IProductInBasket>;
  totalProductsInBasket: number;
  totalPrice: number;
};

const initialState: IInitialState = {
  productsInBasket: {},
  totalPrice: 0,
  totalProductsInBasket: 0,
};

export const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    addProductToBasket: (state, { payload }: PayloadAction<IProduct>) => {
      if (payload.id in state.productsInBasket) {
        state.productsInBasket[payload.id].amount += 1;
      } else {
        state.productsInBasket[payload.id] = { amount: 1, product: payload };
      }
      state.totalProductsInBasket += 1;
      state.totalPrice += payload.price;
    },
    removeProductFromBasket: (state, { payload }: PayloadAction<IProduct>) => {
      if (state.productsInBasket[payload.id].amount > 1) {
        state.productsInBasket[payload.id].amount -= 1;
      } else {
        state.productsInBasket[payload.id].amount -= 1;
        const test = state.productsInBasket;
        delete test[payload.id];
        state.productsInBasket = test;
      }
      state.totalProductsInBasket -= 1;
      state.totalPrice -= payload.price;
    },
  },
});
export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
