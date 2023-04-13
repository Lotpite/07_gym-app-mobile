import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

const initialState1 = {
  name: "Andrew",
  email: "Email@email.com",
  gym: {
    trainings: [
      {
        id: "1673560800000",
        exercises: [
          {
            id: "pushup",
            total: 40,
            sets: [
              { order: 1, activated: false, reps: 11 },
              { order: 2, activated: false, reps: 12 },
              { order: 3, activated: false, reps: 13 },
              { order: 4, activated: false, reps: 5 },
              { order: 5, activated: false, reps: 0 },
            ],
            active: false,
          },
          {
            id: "squats",
            total: 24,
            sets: [
              { order: 1, activated: false, reps: 10 },
              { order: 2, activated: false, reps: 10 },
              { order: 3, activated: false, reps: 4 },
              { order: 4, activated: false, reps: 0 },
              { order: 5, activated: false, reps: 0 },
            ],
            active: false,
          },
          {
            id: "crunches",
            total: 66,
            sets: [
              { order: 1, activated: false, reps: 9 },
              { order: 2, activated: false, reps: 11 },
              { order: 3, activated: false, reps: 20 },
              { order: 4, activated: false, reps: 15 },
              { order: 5, activated: false, reps: 11 },
            ],
            active: false,
          },
        ],
      },
      {
        id: "1673647200000",
        exercises: [
          {
            id: "pushup",
            total: 40,
            sets: [
              { order: 1, activated: false, reps: 13 },
              { order: 2, activated: false, reps: 12 },
              { order: 3, activated: false, reps: 13 },
              { order: 4, activated: false, reps: 5 },
              { order: 5, activated: false, reps: 0 },
            ],
            active: false,
          },
          {
            id: "squats",
            total: 24,
            sets: [
              { order: 1, activated: false, reps: 10 },
              { order: 2, activated: false, reps: 10 },
              { order: 3, activated: false, reps: 4 },
              { order: 4, activated: false, reps: 0 },
              { order: 5, activated: false, reps: 0 },
            ],
            active: false,
          },
          {
            id: "crunches",
            total: 66,
            sets: [
              { order: 1, activated: false, reps: 9 },
              { order: 2, activated: false, reps: 11 },
              { order: 3, activated: false, reps: 20 },
              { order: 4, activated: false, reps: 15 },
              { order: 5, activated: false, reps: 11 },
            ],
            active: false,
          },
        ],
      },
    ],
  },
};
const initialState: IUser = {
  email: "",
  name: "",
  id: "",
  password: "",
  gym: {
    trainings: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

console.log("hi");
export const {} = userSlice.actions;

export default userSlice.reducer;
