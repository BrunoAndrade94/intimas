import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDialogCEP: (state) => {
      state.isOpen = true;
    },
    closeDialogCEP: (state) => {
      state.isOpen = false;
    },
    flagDialogCEP: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openDialogCEP, closeDialogCEP, flagDialogCEP } =
  dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;
