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

    async createIssue(payload: any) {
        const data = await httpReq.post("/issue", payload).then((data) => data);
        return data;
    }
}

const ProjectHttpReq = new ProjectReq();

export default ProjectHttpReq;