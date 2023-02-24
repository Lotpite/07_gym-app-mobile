export interface ISet {
  order: number;
  reps: number;
}

export interface ISetPayload {
  exsId: number;
  order: number;
  reps: number;
}

export interface IExercise {
  id: string;
  total: number;
  sets: {
    order: number;
    reps: number;
  }[];
  active: boolean;
}

export interface ITraining {
  id: string;
  exercises: {
    id: string;
    total: number;
    sets: {
      order: number;
      reps: number;
    }[];
    active: boolean;
  }[];
}
