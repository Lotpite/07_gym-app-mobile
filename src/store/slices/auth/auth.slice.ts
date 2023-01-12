import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { AuthResponse } from "../../../models/response/authResponse";
import { signIn, signOut, signUp } from "./auth.actions";

const initialState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: '',
}

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            // ? reducers
        },
        extraReducers: {
            [signIn.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
                state.error = '';
                state.user = action.payload.user;
                localStorage.setItem('token', action.payload.accessToken);
                state.isLoading = false;
                state.isAuth = true;
            },
            [signIn.pending.type]: (state) => {
                state.isLoading = true;
            },
            [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            },

            [signUp.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
                state.error = '';
                // state.user = action.payload.user;
                // const token = localStorage.setItem('token', action.payload.accessToken);
                // state.isAuth = true;
                state.isLoading = false;
            },
            [signUp.pending.type]: (state) => {
                state.isLoading = true;
            },
            [signUp.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            },

            [signOut.fulfilled.type]: (state) => {
                state.error = '';
                state.user = {} as IUser
                localStorage.removeItem('token');
                state.isLoading = false;
                state.isAuth = false;
            },
            [signOut.pending.type]: (state) => {
                state.isLoading = true;
            },
            [signOut.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload
            }
        }
    }
)

export default authSlice.reducer;