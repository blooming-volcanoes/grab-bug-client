/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class PeopleReq {
    async getAllUsers() {
        const { data } = await httpReq.get("/users").then((data) => data);
        return data;
    }
}

const UserHttpReq = new PeopleReq();

export default UserHttpReq;
