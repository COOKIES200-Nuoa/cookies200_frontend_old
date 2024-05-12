import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { getLocalStorage } from "../helpers";

const fetcher: AxiosInstance = axios.create({
    //! Replace with environmental variables: import.meta.env.[VARIABLE_NAME]
    baseURL: "",
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Max-Age": 1800,
    //     "Access-Control-Allow-Headers": "content-type",
    //     "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
    // }
});

// fetcher.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//     // const user = getLocalStorage<User>(CURRENT_USER);
//     // if (user) {
//     //     config.headers.Authorization = user.accessToken;
//     // }

//     // console.log("Request Config: ", config)
//     return config;
// })

// fetcher.interceptors.response.use((response: AxiosResponse) => {

//     // console.log("Response: ", response)
//     return response;
// })



export default fetcher;