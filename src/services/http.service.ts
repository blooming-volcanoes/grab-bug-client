<<<<<<< HEAD
/* eslint-disable no-unneeded-ternary */
/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from "axios";

let token: any | undefined;
if (typeof window !== "undefined") {
    const userString: any = window.localStorage.getItem("user");
    token = JSON.parse(userString).token;
}

const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        authorization: token ? token : "",
    },
=======
/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosConfig = {
    baseURL:"http://localhost:5000",
    // timeout: 6000,
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
};

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((data) => data);
    }

    async post(url: string, body?: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((data) => data);
    }

    async put(url: string, body?: any): Promise<AxiosResponse> {
        return instance.put(url, body).then((data) => data);
    }

    async delete(payload: any): Promise<AxiosResponse> {
        return instance.delete(payload).then((data) => data);
    }
}

const httpReq = new Request();

export default httpReq;
