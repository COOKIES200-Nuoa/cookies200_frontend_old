import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { getLocalStorage } from "../helpers";

const fetcher: AxiosInstance = axios.create({
    //! Replace with environmental variables: import.meta.env.[VARIABLE_NAME]
    baseURL: "",
    headers: {
        LOGIN_USER: "",
    }
});

fetcher.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // const user = getLocalStorage<User>(CURRENT_USER);
    // if (user) {
    //     config.headers.Authorization = user.accessToken;
    // }

    return config;
})

fetcher.interceptors.response.use((response: AxiosResponse) => {

    return response;
})



export default fetcher;