/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import cogoToast from "cogo-toast";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import AuthHttpReq from "services/Auth.service";
import { IAuthContext, IUser } from "types/Auth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [verify, setVerify] = useState<any>({});
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    // login
    const login = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.login(data);
            setError(null);
            console.log(result, "this is login result");
            setAuthLoading(false);
            if (result.success) {
                const user = {
                    token: `Bearer ${result.token}`,
                    user: result.user,
                };
                localStorage.setItem("user", JSON.stringify(user));
                cogoToast.success(`Congratulations registered successfully`);
                router.push("/dashboard");
                window.location.reload();
            }
        } catch (error: any) {
            setAuthLoading(false);
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
        }
    };

    // register
    const register = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.register(data);
            setError(null);
            setVerify(result);
            setAuthLoading(false);
            cogoToast.success(`Check your inbox otp has been sent`);
        } catch (error: any) {
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
            setAuthLoading(false);
        }
    };

    // verify otp
    const verifyOtp = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.otp(data);
            setError(null);
            setVerify(result);
            setAuthLoading(false);
            if (result.success) {
                const user = {
                    token: `Bearer ${result.token}`,
                    user: result.user,
                };
                localStorage.setItem("user", JSON.stringify(user));
                cogoToast.success(`Congratulations registered successfully`);
                router.push("/dashboard");
                window.location.reload();
            }
        } catch (error: any) {
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
            setAuthLoading(false);
        }
    };

    // logout
    const logout = () => {
        localStorage.setItem("user", JSON.stringify({}));
        setUser({});
    };

    // track user
    useEffect(() => {
        const getUser: any = localStorage.getItem("user");
        const user = JSON.parse(getUser);
        setUser(user);
        setLoading(false);
        console.log(user);
    }, []);

    const returnObj: IAuthContext = {
        user,
        loading,
        authLoading,
        error,
        verify,
        setError,
        login,
        register,
        verifyOtp,
        logout,
    };

    console.log({ authLoading });

    return (
        <AuthContext.Provider value={returnObj}>
            {loading ? "loading..." : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
