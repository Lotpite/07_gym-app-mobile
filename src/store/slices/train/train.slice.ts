import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: "1673647200000",
  exercises: [
    {
      id: "pushup",
      total: 40,
      sets: [
        { order: 1, reps: 13 },
        { order: 2, reps: 12 },
        { order: 3, reps: 13 },
        { order: 4, reps: 5 },
        { order: 5, reps: 0 },
      ],
      active: false,
    },
    {
      id: "squats",
      total: 24,
      sets: [
        { order: 1, reps: 10 },
        { order: 2, reps: 10 },
        { order: 3, reps: 4 },
        { order: 4, reps: 0 },
        { order: 5, reps: 0 },
      ],
      active: false,
    },
    {
      id: "crunches",
      total: 66,
      sets: [
        { order: 1, reps: 9 },
        { order: 2, reps: 11 },
        { order: 3, reps: 20 },
        { order: 4, reps: 15 },
        { order: 5, reps: 11 },
      ],
      active: false,
    },
  ],
};

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {},
});

export const {} = trainSlice.actions;

export default trainSlice.reducer;
