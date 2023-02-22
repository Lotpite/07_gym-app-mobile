import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTrains: (state, action: PayloadAction<any>) => {
      console.log("reducer add training", action.payload);
      //! Should not be ANY
      state: state.gym.trainings.unshift(action.payload);
    },
    addExercise: (state, action: PayloadAction<any>) => {
      console.log("reducer add exercise", action.payload);
      let newEx = state.gym.trainings[0].exercises.find(
        (item) => item.id === action.payload.id
      );
      newEx?.sets.push(action.payload.set);
      state: newEx && state.gym.trainings[0].exercises.push(newEx);
    },
  },
});

export const { addTrains, addExercise } = userSlice.actions;

export default userSlice.reducer;
