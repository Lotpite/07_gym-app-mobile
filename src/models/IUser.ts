import { ITraining } from "./IGym";

export interface IUser {
  id: string;
  email: string;
  password: string;
  gym: {
    trainings: ITraining[];
  };
}
