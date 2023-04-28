import { configureStore } from "@reduxjs/toolkit";
// TODO: import slices
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  // TODO: add slices here
  reducer: {
    cart: cartReducer,
  },
});

// Boilderplate for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
