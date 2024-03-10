/* eslint-disable no-unused-vars */
import axios from "axios";
import { getFromLocalStorage } from "./local-storage";

const tokene = getFromLocalStorage("token") || "";
export const getDataAPI = async (url: string, token: string) => {
    // const tokene = localStorage.getItem("token");

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const postDataAPI = async (url: string, post: any, token: string) => {
    // const tokene = localStorage.getItem("token");
    // console.log(`http://localhost:5000/${url}`, post, "from messwage");
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    // console.log(res, "from fetch server");
    return res;
};

export const putDataAPI = async (url: string, post: any, token: string) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const patchDataAPI = async (url: string, post: any, token: string) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const deleteDataAPI = async (url: string, post: any, token: string) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, {
        headers: { Authorization: tokene },
    });
    return res;
};
