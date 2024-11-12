import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openNotification: (state) => {
      state.isOpen = true;
    },
    closeNotification: (state) => {
      state.isOpen = false;
    },
    flagNotification: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openNotification, closeNotification, flagNotification } =
  notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
