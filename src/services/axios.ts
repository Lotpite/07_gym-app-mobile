import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL;

const token: string | null = localStorage.getItem('token')

export const axiosInstance = axios.create(
    {
        withCredentials: true,
        baseURL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

axiosInstance.interceptors.request.use( async config => {
    console.log('interceptors')
    return config
})