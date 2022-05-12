import ManageUserRoles from "DashboardPages/ManageUserRoles/ManageUserRoles";
import DashboardLayout from "Layouts/DashboardLayout";
import { GetServerSideProps } from "next";
import React from "react";
import UserHttpReq from "services/People.service";

const manageUserRoles = ({ users, roles }: any) => (
    <DashboardLayout>
        <ManageUserRoles users={users} roles={roles} />
    </DashboardLayout>
);

export default manageUserRoles;

export const getServerSideProps: GetServerSideProps = async () => {
    const { users } = await UserHttpReq.getAllUsers();
    const roles = ["Project Manager", "Developer", "Submitter", "Designer", "Reviewer"];
    return {
        props: {
            users,
            roles,
        },
    };
};
