import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../../services/user.service";

export const getUsers = createAsyncThunk(
    '/users',
    async () => {
        console.log('users thunk');
        try {
            const response = await fetchUsers()
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)