import { configureStore } from "@reduxjs/toolkit";
// TODO: import slices

export const store = configureStore({
  // TODO: add slices here
});

// Boilderplate for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
