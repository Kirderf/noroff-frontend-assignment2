import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

//presist middleware

const presistMiddleware = (store) => (next) => (action) => {
  const allowedActions = [
    "user/setUser",
    "user/addTranslation/fulfilled",
    "user/getUserOrLogin/fulfilled",
  ];

  const result = next(action);

  if (allowedActions.includes(action.type) && action.payload?.user) {
    localStorage.setItem("user", JSON.stringify(action.payload.user));
  }

  if (action.type === "user/removeUser") {
    localStorage.removeItem("user");
  }

  return result;
};

/**
 * Configures the redux store.
 */
export default configureStore({
  reducer: {
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(presistMiddleware),
});
