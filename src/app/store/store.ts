import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from "./products/slice";
import { productsAPI } from "./products/service";

const rootReducer = combineReducers({
  productReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
