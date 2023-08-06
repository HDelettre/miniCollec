import { configureStore } from "@reduxjs/toolkit";

// IMPORT SLICES
import userReducer from "./sliceUsers";

export default configureStore({
  reducer: {
    user: userReducer,
  }
});