import ManageUserRoles from "DashboardPages/ManageUserRoles/ManageUserRoles";
import DashboardLayout from "Layouts/DashboardLayout";
import { GetServerSideProps } from "next";
import React from "react";
import UserHttpReq from "services/People.service";
<<<<<<< HEAD
import ProjectHttpReq from "services/Project.service";

const manageUserRoles = ({ users, roles, project }: any) => (
    <DashboardLayout>
        <ManageUserRoles users={users} roles={roles} project={project} />
=======

const manageUserRoles = ({ users, roles }: any) => (
    <DashboardLayout>
        <ManageUserRoles users={users} roles={roles} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
    </DashboardLayout>
);

export default manageUserRoles;

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { params } = context;
    const { projectId } = params;
    const { users } = await UserHttpReq.getAllUsers();
    const { project } = await ProjectHttpReq.getProject(projectId);
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
=======
export const getServerSideProps: GetServerSideProps = async () => {
    const { users } = await UserHttpReq.getAllUsers();
    const roles = ["Project Manager", "Developer", "Submitter", "Designer", "Reviewer"];
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
    return {
        props: {
            users,
            roles,
<<<<<<< HEAD
            project,
=======
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        },
    };
};
