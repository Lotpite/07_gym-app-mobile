import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../../models/IUser";

interface AuthState {
  user: IUser;
  loading: boolean;
  error: null | string | undefined;
}

interface Credentials {
  email: string;
  password: string;
}

export const fetchUser = createAsyncThunk<IUser, Credentials>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        { email, password }
      );
      return response.data;
    } catch (error: any) {
      return error.message
        ? rejectWithValue(error.message)
        : rejectWithValue({ message: "Undefined error occurs" });
    }
  }
);

const initialState: AuthState = {
  user: {
    email: "",
    id: "",
    password: "",
    gym: {
      trainings: [],
    },
  },
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
