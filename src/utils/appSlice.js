import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    showAlert: () => {
      alert("hi");
      console.log('haha');
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export const { showAlert } = appSlice.actions;

export default appSlice.reducer;
