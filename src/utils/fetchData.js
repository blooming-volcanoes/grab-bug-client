/* eslint-disable no-unused-vars */
import axios from "axios";

let tokene;
if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user"));
    tokene = user?.token;
}

export const getDataAPI = async (url, token) => {
    // const tokene = localStorage.getItem("token");

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const postDataAPI = async (url, post, token) => {
    // const tokene = localStorage.getItem("token");
    // console.log(`http://localhost:5000/${url}`, post, "from messwage");
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    // console.log(res, "from fetch server");
    return res;
};

export const putDataAPI = async (url, post, token) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const patchDataAPI = async (url, post, token) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, post, {
        headers: { Authorization: tokene },
    });
    return res;
};

export const deleteDataAPI = async (url, token) => {
    // const tokene = localStorage.getItem("token");
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`, {
        headers: { Authorization: tokene },
    });
    return res;
};
