import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
// import usersReducer from "./slices/users/users.slice.";
import userReducer from "./slices/user/user.slice";

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    auth: authReducer,
    user: userReducer,
  },
});

// * types to collaborate with store
export type RootState = ReturnType<typeof store.getState>; // type of state
export type AppDispatch = typeof store.dispatch; // type of dispatch
