import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      const newState = { ...state };
      newState.value = action.payload;
      return newState;
    },
  },
});

export const { setInputValue } = inputSlice.actions;

export const inputReducer = inputSlice.reducer;
