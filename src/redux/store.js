import { configureStore } from "@reduxjs/toolkit";
import { inputReducer } from "./features/input/inputSlice";
import { dialogReducer } from "./features/dialog/dialogSlice";
import { notificationReducer } from "./features/notification/notificationSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    dialog: dialogReducer,
    notification: notificationReducer,
  },
});
