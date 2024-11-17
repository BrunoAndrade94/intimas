import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openCepDialog: (state) => {
      state.isOpen = true;
    },
    closeCepDialog: (state) => {
      state.isOpen = false;
    },
    flagCepDialog: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCepDialog, closeCepDialog, flagCepDialog } =
  dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;
