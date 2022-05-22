/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class ProjectReq {
    async createProject(payload: any) {
        const { data } = await httpReq.post("/project", payload).then((data) => data);
        return data;
    }

    async getAllProjects() {
        const { data } = await httpReq.get("/project/all").then((data) => data);
        return data;
    }

    async getProject(id: any) {
        const { data } = await httpReq.get(`/project/${id}`).then((data) => data);
        return data;
    }

    // this will be deleted later
    async getUsersAllProjects(userId: any) {
        const { data } = await httpReq.get(`/user-projects/${userId}`).then((data) => data);
        console.log(userId, "service");
        console.log(data, "service");
        return data;
    }
}

const ProjectHttpReq = new ProjectReq();

export default ProjectHttpReq;
