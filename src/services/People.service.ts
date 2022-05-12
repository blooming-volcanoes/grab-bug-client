/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class PeopleReq {
    async getAllUsers() {
        const { data } = await httpReq.get("/users").then((data: any) => data);
        return data;
    }

<<<<<<< HEAD
    async editUserRole(payload: any) {
        const { data } = await httpReq.put(`/user`, payload).then((data: any) => data);
=======
    async editUserRole(id: any, payload: any) {
        const { data } = await httpReq.put(`/user/${id}`, payload).then((data: any) => data);
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        return data;
    }
}

const UserHttpReq = new PeopleReq();

export default UserHttpReq;
