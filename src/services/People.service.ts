/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class PeopleReq {
    async getAllUsers() {
        const { data } = await httpReq.get("/all-users").then((data: any) => data);
        return data;
    }

    async editUserRole(payload: any) {
        const { data } = await httpReq.put("/edit-user-role", payload).then((data: any) => data);
        console.log(payload);
        return data;
    }
}

const UserHttpReq = new PeopleReq();

export default UserHttpReq;
