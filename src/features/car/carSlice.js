import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["New Car", "Sell Car", "Accessories", "Compare Cars"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
