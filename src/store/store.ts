import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "./slices/users/users.slice.";
import authReducer from "./slices/auth/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// * types to collaborate with store
export type RootState = ReturnType<typeof store.getState>; // type of state
export type AppDispatch = typeof store.dispatch; // type of dispatch
