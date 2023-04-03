import { configureStore } from "@reduxjs/toolkit";
import trainReducer from "./slices/train/train.slice";
// import usersReducer from "./slices/users/users.slice.";
import userReducer from "./slices/user/user.slice";
import authReducer from "./slices/auth/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    train: trainReducer,
  },
});

// * types to collaborate with store
export type RootState = ReturnType<typeof store.getState>; // type of state
export type AppDispatch = typeof store.dispatch; // type of dispatch
