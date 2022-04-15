/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export interface IUser {
    email: string | undefined;
    name?: string | undefined;
    password: string | undefined;
    code?: string | undefined;
}

export interface IAuthContext {
    user: any;
    loading: boolean;
    authLoading: boolean;
    error: null;
    verify: any;
    setError: React.Dispatch<React.SetStateAction<null>>;
    login: (data: IUser) => Promise<void>;
    register: (data: IUser) => Promise<void>;
    verifyOtp: (data: IUser) => Promise<void>;
}
