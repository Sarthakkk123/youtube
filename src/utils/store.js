import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"; // Import the reducer, not the slice object

const store = configureStore({
  reducer: {
    app: appReducer, // Use the appReducer here
  },
});

export default store;
