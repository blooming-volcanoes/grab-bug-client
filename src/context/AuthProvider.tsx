/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import cogoToast from "cogo-toast";
import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
import AuthHttpReq from "services/Auth.service";
import { IAuthContext, IUser } from "types/Auth";
import { getFromLocalStorage } from "utils/local-storage";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const initialUserState = getFromLocalStorage("user") || "{}";
    const [user, setUser] = useState<any>(initialUserState);
    const [loading, setLoading] = useState(false);
    const [verify, setVerify] = useState<any>({});
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState("");
    const router = useRouter();

    // login
    const login = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.login(data);
            setError(null);
            console.log(result, "this is login result");
            console.log(result.success, "this is login result");
            if (result.success) {
                const user = result?.user;
                const token = `Bearer ${result.token}`;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", JSON.stringify(token));
                cogoToast.success(`Logged in successfully`);
                setUser(user); // added later
                setLoading(false); // added later
                setToken(user?.token); // added later
                setAuthLoading(false);
                if (!result.user.isActive) {
                    router.push("/dashboard/projectCreate");
                } else {
                    router.push("/dashboard/projects/myProjects");
                }
                // window.location.reload();
            }

            setLoading(false);
        } catch (error: any) {
            setAuthLoading(false);
            const { message } = error?.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
        }
        setAuthLoading(false);
    };

    // register
    const register = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.register(data);
            setError(null);
            console.log(result, "this is register result");
            if (result.success) {
                const token = `Bearer ${result.token}`;
                console.log(token, "this is token");
                localStorage.setItem("token", JSON.stringify(token));
                setAuthLoading(false);
                cogoToast.success(`Check your inbox otp has been sent`);
            }
        } catch (error: any) {
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
            setAuthLoading(false);
        }
        setAuthLoading(false);
    };

    // logout
    const logout = () => {
        localStorage.setItem("user", JSON.stringify({}));
        setUser({});
        // window.location.reload();
    };

    // const updateLocalStorageOnUserDataChanged = (updatedUserData: any) => {
    //     const localStorageSting = localStorage.getItem("user");
    //     let storageData;
    //     if (typeof localStorageSting === "string") {
    //         storageData = JSON.parse(localStorageSting);
    //     }
    //     const updatedData = {
    //         ...storageData,
    //         user: {
    //             ...updatedUserData,
    //         },
    //     };
    //     localStorage.setItem("user", JSON.stringify(updatedData));
    // };

    // track user

    const returnObj: IAuthContext = {
        user,
        loading,
        authLoading,
        error,
        setError,
        login,
        register,
        logout,
        token,
        setUser,
    };
    console.log(user, "thisis user from auth provider");

    return (
        <AuthContext.Provider value={returnObj}>
            {loading ? "loading..." : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
