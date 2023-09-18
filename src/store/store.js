import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

/**
 * Configures the redux store.
 */
export default configureStore({
  reducer: {
    user: userSlice,
  },
});
