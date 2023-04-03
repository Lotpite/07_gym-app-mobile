import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise, ISetPayload, ITraining } from "../../../models/IGym";

const initialState: ITraining = {
  id: "",
  exercises: [
    {
      id: "",
      total: 0,
      sets: [],
    },
  ],
};

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    addExs: (state, action: PayloadAction<IExercise>) => {
      if (state.exercises[0].id === "") {
        state.exercises = [action.payload];
      } else {
        state.exercises.push(action.payload);
      }
    },
    addSetToExs: (state, action: PayloadAction<ISetPayload>) => {
      // debugger;
      state.exercises[action.payload.exsId].sets.push({
        order: action.payload.order,
        reps: action.payload.reps,
      });
      state.exercises[action.payload.exsId].total += action.payload.reps;
    },
    addDate: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { addExs, addSetToExs, addDate } = trainSlice.actions;
export default trainSlice.reducer;
