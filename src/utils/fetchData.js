/* eslint-disable no-unused-vars */
import axios from 'axios';

export const getDataAPI = async (url, token) => {
    const tokene = localStorage.getItem("token")

    const res = await axios.get(`http://localhost:5000/${url}`, {
        headers: { Authorization: tokene}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const tokene = localStorage.getItem("token")
    console.log(`http://localhost:5000/${url}`, post, "from messwage");
    const res = await axios.post(`http://localhost:5000/${url}`, post, {
        headers: { Authorization: tokene}
    })
    console.log(res, "from fetch server");
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const tokene = localStorage.getItem("token")
    const res = await axios.put(`http://localhost:5000/${url}`, post, {
        headers: { Authorization: tokene}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const tokene = localStorage.getItem("token")
    const res = await axios.patch(`http://localhost:5000/${url}`, post, {
        headers: { Authorization: tokene}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const tokene = localStorage.getItem("token")
    const res = await axios.delete(`http://localhost:5000/${url}`, {
        headers: { Authorization: tokene}
    })
    return res;
}