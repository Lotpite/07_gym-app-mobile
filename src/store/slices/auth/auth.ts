import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../../models/IUser";
import { ITraining } from "../../../models/IGym";

interface AuthState {
  user: IUser;
  loading: boolean;
  error: null | string | undefined;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegistrationCredentials {
  name: string;
  email: string;
  password: string;
}

interface addTrainProps {
  email: string;
  newTrain: ITraining;
}

export const fetchUser = createAsyncThunk<IUser, LoginCredentials>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return error.message
        ? rejectWithValue(error.message)
        : rejectWithValue({ message: "Undefined error occurs" });
    }
  }
);

export const createUser = createAsyncThunk<IUser, RegistrationCredentials>(
  "auth/registration",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}registration`,
        { name, email, password }
      );
      return response.data;
    } catch (error: any) {
      return error.message
        ? rejectWithValue(error.message)
        : rejectWithValue({ message: "Undefined error occurs" });
    }
  }
);

export const addTrain = createAsyncThunk<string, addTrainProps>(
  "auth/addTrain",
  async ({ email, newTrain }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}addTrain`,
        { email, newTrain }
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
    name: "",
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
  reducers: {
    updateUser: (state, action: PayloadAction<ITraining>) => {
      state.user.gym.trainings.push(action.payload);

      debugger;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setUserFromLocalStorage: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    });
  },
});

export const { updateUser, setUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
