import ManageUserRoles from "DashboardPages/ManageUserRoles/ManageUserRoles";
import DashboardLayout from "Layouts/DashboardLayout";
import { GetServerSideProps } from "next";
import React from "react";
import UserHttpReq from "services/People.service";
import ProjectHttpReq from "services/Project.service";

const manageUserRoles = ({ users, roles, project }: any) => (
    <DashboardLayout>
        <ManageUserRoles users={users} roles={roles} project={project} />
    </DashboardLayout>
);

export default manageUserRoles;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { params } = context;
    const { projectId } = params;
    const { users } = await UserHttpReq.getAllUsers();
    const project = await ProjectHttpReq.getProject(projectId);
    const roles = [
        "Project Manager",
        "Front-end Developer",
        "Back-end Developer",
        "Submitter",
        "UI/UX Designer",
        "Reviewer",
        "Pen Tester",
        "QA Analyst",
    ];
    return {
        props: {
            users,
            roles,
            project: project.project,
        },
    };
};
