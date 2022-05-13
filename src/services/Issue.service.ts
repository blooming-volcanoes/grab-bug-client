/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class IssueReq {
    async createIssue(payload: any) {
        const data = await httpReq.post("/issue", payload).then((data) => data);
        return data;
    }

    async getAllIssues() {
        const data = await httpReq.get("/issue/all").then((data) => data);
        return data;
    }

    async getIssue(id: any) {
        const data = await httpReq.get(`/issue/${id}`).then((data) => data);
        return data;
    }

    async approveIssue(id: any, payload: any) {
        const data = await httpReq.put(`/issue/${id}`, payload).then((data) => data);
        return data;
    }

    async IssueFileUpload(payload: any) {
        const { data } = await httpReq.post(`/files/attachments`, payload).then((data) => data);
        return data;
    }

    async getIssuesFiles() {
        const { data } = await httpReq.get(`/files`).then((data) => data);
        return data;
    }
}

const IssueHttpReq = new IssueReq();

export default IssueHttpReq;
