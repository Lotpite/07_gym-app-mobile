import { AxiosResponse } from "axios";
import { axiosInstance } from "./axios";
import { IUser } from "../models/IUser";

export const fetchUsers = async (): Promise<AxiosResponse> => {
    return await axiosInstance.get<IUser[]>('/users')
}