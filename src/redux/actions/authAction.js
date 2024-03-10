/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { getFromLocalStorage } from "utils/local-storage";
import { GLOBALTYPES } from "./globalTypes";

// export const login = (data) => async (dispatch) => {
//     try {
//         dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
//         const res = await postDataAPI("login", data);
//         dispatch({
//             type: GLOBALTYPES.AUTH,
//             payload: {
//                 token,
//                 user: res.data.user,
//             },
//         });
//         // console.log(res.data.access_token);

//         localStorage.setItem("firstLogin", true);
//         localStorage.setItem("userData", res.data.access_token);
//         dispatch({
//             type: GLOBALTYPES.ALERT,
//             payload: {
//                 success: res.data.msg,
//             },
//         });
//     } catch (err) {
//         dispatch({
//             type: GLOBALTYPES.ALERT,
//             payload: {
//                 error: err.response.data.msg,
//             },
//         });
//     }
// };

export const loadUser = () => async (dispatch) => {
    const token = getFromLocalStorage("token");

    console.log(token, "token from the loaduser action");
    if (token) {
        try {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            console.log(res.data, "res from the loaduser action");

            dispatch({
                type: GLOBALTYPES.AUTH,
                payload: {
                    token,
                    user: res.data.user,
                },
            });

            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    loading: false,
                },
            });
        } catch (err) {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
            console.log(err, "error from the authaction");
            // if (err) {
            //     localStorage.setItem("user", JSON.stringify({}));
            //     localStorage.setItem("token", JSON.stringify({}));
            // }
        }
    }
};

// export const register = (data) => async (dispatch) => {
//     const check = valid(data);
//     if (check.errLength > 0) return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });

//     try {
//         dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

//         const res = await postDataAPI("register", data);
//         dispatch({
//             type: GLOBALTYPES.AUTH,
//             payload: {
//                 token,
//                 user: res.data.user,
//             },
//         });

//         // console.log(res);

//         localStorage.setItem("firstLogin", true);
//         localStorage.setItem("userData", res.data.access_token);
//         dispatch({
//             type: GLOBALTYPES.ALERT,
//             payload: {
//                 success: res.data.msg,
//             },
//         });
//     } catch (err) {
//         dispatch({
//             type: GLOBALTYPES.ALERT,
//             payload: {
//                 error: err.response.data.msg,
//             },
//         });
//     }
// };

// export const logout = () => async (dispatch) => {
//     try {
//         localStorage.removeItem("firstLogin");
//         await postDataAPI("logout");
//         window.location.href = "/";
//     } catch (err) {
//         dispatch({
//             type: GLOBALTYPES.ALERT,
//             payload: {
//                 error: err.response.data.msg,
//             },
//         });
//     }
// };
