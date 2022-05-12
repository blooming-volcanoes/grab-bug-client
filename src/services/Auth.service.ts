/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class AuthReq {
    async login(payload: any) {
        const { data } = await httpReq.post("/login", payload).then((data) => data);
        return data;
    }

    async register(payload: any) {
        const { data } = await httpReq.post("/register", payload).then((data) => data);
        return data;
    }

    async forgetPassword(payload: any) {
        const { data } = await httpReq.post("/password/forget", payload).then((data) => data);
        return data;
    }

    async resetPassword() {
        const { data } = await httpReq.put("/password/reset/:token").then((data) => data);
        return data;
    }

    async otp(payload: any) {
        const { data } = await httpReq.post("/otp", payload).then((data) => data);
        return data;
    }
}

const AuthHttpReq = new AuthReq();

export default AuthHttpReq;
