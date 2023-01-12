import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/authResponse";
import { axiosInstance } from "./axios";

export const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return axiosInstance.post<AuthResponse>('/login', {email, password})
}

export const registration = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return axiosInstance.post<AuthResponse>('/registration', {email, password})
}

export const logout = async (): Promise<void> => {
    return axiosInstance.post('/logout')
}
