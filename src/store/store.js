import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

/**
 * Creates a redux middleware to persist the user to localStorage when it is updated.
 * @returns returns the action for the next stage of the reducer.
 */
const persistMiddleware = (store) => (next) => (action) => {
  const allowedPeristed = [
    "user/setUser",
    "user/getUserOrLogin/fulfilled",
    "user/addTranslation/fulfilled",
  ];

  const result = next(action);

  //Store user in local storage if the action path is correct.
  if (allowedPeristed.includes(action.type) && action.payload.user) {
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
    getDefaultMiddleware().concat([persistMiddleware]),
});
