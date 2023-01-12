import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/auth.slice';
import userReducer from './slices/users/users.slice.';

export const store = configureStore(
    {
        reducer: {
            users: userReducer,
            auth: authReducer
        }
    }
)

// * types to collaborate with store
export type RootState = ReturnType<typeof store.getState>; // type of state
export type AppDispatch = typeof store.dispatch; // type of dispatch