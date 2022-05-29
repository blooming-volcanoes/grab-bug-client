/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { stringify } from "querystring";
import { postDataAPI } from "../../utils/fetchData";
import valid from "../../utils/valid";
import { GLOBALTYPES } from "./globalTypes";

let tokene;
if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user"));
    tokene = user?.token;
}

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
        const res = await postDataAPI("login", data);
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: tokene,
                user: res.data.user,
            },
        });
        // console.log(res.data.access_token);

        localStorage.setItem("firstLogin", true);
        localStorage.setItem("userData", res.data.access_token);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg,
            },
        });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg,
            },
        });
    }
};

export const loadUser = (data) => async (dispatch) => {
    if (tokene) {
        try {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
                headers: {
                    Authorization: `${tokene}`,
                },
            });

            dispatch({
                type: GLOBALTYPES.AUTH,
                payload: {
                    token: tokene,
                    user: res.data.user,
                },
            });

            dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
        } catch (err) {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
            if (err) {
                localStorage.setItem("user", JSON, stringify({}));
            }
        }
    }
};

export const register = (data) => async (dispatch) => {
    const check = valid(data);
    if (check.errLength > 0) return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

        const res = await postDataAPI("register", data);
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: tokene,
                user: res.data.user,
            },
        });

        // console.log(res);

        localStorage.setItem("firstLogin", true);
        localStorage.setItem("userData", res.data.access_token);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg,
            },
        });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg,
            },
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem("firstLogin");
        await postDataAPI("logout");
        window.location.href = "/";
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg,
            },
        });
    }
};
