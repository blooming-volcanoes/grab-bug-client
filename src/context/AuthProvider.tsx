/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import cogoToast from "cogo-toast";
import React, { createContext, useState } from "react";
import AuthHttpReq from "services/Auth.service";
import { IAuthContext, IUser } from "types/Auth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const [verify, setVerify] = useState<any>({});
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState(null);

    // login
    const login = async (data: IUser) => {
        setAuthLoading(true);
        try {
            const result = await AuthHttpReq.login(data);
            setError(null);
            console.log(result);
            setAuthLoading(false);
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
        } catch (error: any) {
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
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
        } catch (error: any) {
            const { message } = error.response.data;
            setError(message);
            cogoToast.error(`${message} !!!`);
        }
    };

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
    };

    console.log({ authLoading });

    return (
        <AuthContext.Provider value={returnObj}>
            {loading ? "loading..." : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
