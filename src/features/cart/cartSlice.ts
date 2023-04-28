import { createSlice } from "@reduxjs/toolkit";

const books = [
  {
    id: 1,
    idCode: "buildingMicroservices",
    title: "Building Microservices",
  },
  {
    id: 2,
    idCode: "gatsbyEcommerce",
    title: "Gatsby E-Commerce",
  },
  {
    id: 3,
    idCode: "rustWeb",
    title: "Rust Web Programming",
  },
];

const initialState = {
  //   count: 0,
  books,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    subtract: (state) => {
      state.count--;
    },
    add: (state) => {
      state.count++;
    },
  },
});

export const { add, subtract } = cartSlice.actions;
export default cartSlice.reducer;
