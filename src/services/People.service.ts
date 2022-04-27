/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class PeopleReq {
    async getAllUsers() {
        const { data } = await httpReq.get("/users").then((data: any) => data);
        return data;
    }

    async editUserRole(id: any, payload: any) {
        const { data } = await httpReq.put(`/user/${id}`, payload).then((data: any) => data);
        return data;
    }
}

const UserHttpReq = new PeopleReq();

export default UserHttpReq;
