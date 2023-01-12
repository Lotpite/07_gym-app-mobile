import { createAsyncThunk } from "@reduxjs/toolkit";
import { IForm } from "../../../models/request/authRequest";
import { login, logout, registration } from "../../../services/auth.service";

export const signIn = createAsyncThunk(
    'auth/login',
    async ( {email, password}: IForm ) => {
        console.log('login thunk');
        try {
            const response = await login(email, password)
            return response.data;
        } catch (error: any) {
                console.log(error.response?.data?.message)
        }
    }
)

export const signUp = createAsyncThunk(
    'auth/registration',
    async ( {email, password}: IForm ) => {
        console.log('registration thunk');
        try {
            const response = await registration(email, password)
            return response.data
        } catch (error) {
            alert(error)
        }
    }
)

export const signOut = createAsyncThunk(
    'auth/logout',
    async () => {
        console.log('logout thunk');
        try {
           return await logout()
        } catch (error) {
            alert(error)
        }
    }
)
